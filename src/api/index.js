const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {port} = require('./config');
const router = require('./routes/auth');


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(router);

app.listen(port, () => {
  console.log('The server is running');
});