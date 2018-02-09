const { Client } = require('pg');
const validator = require('validator');
const bcrypt = require('bcrypt');

const configDB = require('../config/db');
const validators = require('../helpers/validators');

const client = new Client(configDB);
client.connect();      

module.exports = new class {

  async createUser(req, res) {
    const isValid = validateFields(req.body);

    if(!isValid) {
      res.status(400).send('Invalid data!');
      return;
    };

    const {Email, Name, Password, Phone} = req.body;
    const hashPass = bcrypt.hashSync(Password.value, 10);
    
    try {
      const text = 'INSERT INTO clients(email, password, name, telephone) VALUES($1, $2, $3, $4) RETURNING *';
      const values = [Email.value, hashPass, Name.value, Phone.value];

      const result = await client.query(text, values);
      
      res.status(200).send(result.rows[0]);
    } catch (err) {
      console.log(err);

      res.status(500).send(err);
    }
  }

  async checkUser(req, res) {
    const isValid = validateFields(req.body);

    if(!isValid) {
      res.status(400).send('Invalid data!');
      return;
    };

    const {Email, Password} = req.body;
    try {
      const text = 'SELECT * FROM clients WHERE email = $1';
      const values = [Email.value]

      const result = await client.query(text, values);      
      const user = result.rows[0];

      if(!user) {
        res.status(404).send({msg: 'User not found!', item: 'Email'});
        return;
      }

      if(bcrypt.compareSync(Password.value, user.password)) {
        delete user.password;

        res.status(200).send(user);
      } else {
        res.status(401).send({msg: 'Wrong password', item: 'Password'});                
      };
     
    } catch (err) {
      console.log(err);

      res.status(500).send(err);
    }
  }

}

const validateFields = (form) => {
  for(let label in form) {
    const item = form[label];
    
    const isValid = validators[`validate${label}`](item.value);
    const isEmpty = item.isRequired === 'true' && validator.isEmpty(item.value);

    
    if(!isValid || isEmpty) return false;
  };

  return true;
}