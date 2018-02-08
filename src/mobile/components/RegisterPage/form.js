import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  DeviceEventEmitter
} from 'react-native'
import validator from 'validator';

import Field from '../../common/components/field'
import Button from '../../common/components/submitButton'

class RegisterForm extends React.Component {

  state = {
    form: {
      Name: {
        value: '',
        isRequired: true
      },
      Email: {
        value: '',
        isRequired: true
      },
      Password: {
        value: '',
        isRequired: true
      },
      Phone: {
        value: '',
        isRequired: false
      }
    }
  }

  handleChange = (text, label) => {
    const initialState = this.state;
    const newState = {...initialState};


    newState.form[label].value = text;
    this.setState(newState);
  }

  submitHandler = () => {
    const {form} = this.state;
    let hasError = false;
    

    for(let label in form) {
      const item = form[label];

      const isValid = this[`validate${label}`](item.value);
      const isEmpty = item.isRequired && validator.isEmpty(item.value);

      if(!isValid || isEmpty) {
        hasError = true;
        DeviceEventEmitter.emit(`${label}ValidationError`);
      } else {
        DeviceEventEmitter.emit(`${label}ValidationSuccess`);        
      }
    };

    if(hasError) return;

    console.log(form);
  }

  validateName = (val) => {
    const {length} = val;

    if(length >= 2 && length <= 255) return true;
  }

  validateEmail = (val) => {
    return validator.isEmail(val);
  }

  validatePassword = (val) => {
    const {length} = val;
    
    if(length >= 8 && length <= 50) return true;
  }

  validatePhone = (val) => {
    return validator.isMobilePhone(val, 'uk-UA') || validator.isEmpty(val);
  }

  render() {

    return (
      <View>

        <ScrollView 
          keyboardShouldPersistTaps='handled'
          contentContainerStyle={styles.scrollContainer}>

            <Field 
              label="Name"
              errorMessage="Between 2 and 255 characters"
              onChange={this.handleChange}
              validateFunc={this.validateName}
              isRequired={true}/>

            <Field 
              label="Email"
              errorMessage="Please write a valid email"
              onChange={this.handleChange}
              validateFunc={this.validateEmail}              
              isRequired={true}/>

            <Field 
              label="Password"
              isPassword={true}
              errorMessage="Between 8 and 50 characters"
              onChange={this.handleChange}     
              validateFunc={this.validatePassword}         
              isRequired={true}/>

            <Field 
              label="Phone"
              errorMessage="Please write a valid phone"
              onChange={this.handleChange}
              validateFunc={this.validatePhone}/>

        </ScrollView>

        <Button 
          label="Sign Up"
          submitHandler={this.submitHandler}/>

      </View>
    );
  };
};

export default RegisterForm;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center'
  }
});