import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  DeviceEventEmitter
} from 'react-native'
import {connect} from 'react-redux'
import validator from 'validator';

import { logInAction } from '../../redux/actions/auth'

import Field from '../../common/components/field'
import Button from '../../common/components/submitButton'

class LoginForm extends React.Component {

  state = {
    form: {
      Email: {
        value: '',
        isRequired: true
      },
      Password: {
        value: '',
        isRequired: true
      },
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.errorMessage) {
      DeviceEventEmitter.emit(`${nextProps.auth.errorItem}ValidationError`, nextProps.auth.errorMessage);
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

    this.props.logIn(form);
  }

  validateEmail = (val) => {
    return validator.isEmail(val);
  }

  validatePassword = (val) => {
    const {length} = val;
    
    if(length >= 8 && length <= 50) return true;
  }

  render() {

    return (
      <View>

        <ScrollView 
          keyboardShouldPersistTaps='handled'
          contentContainerStyle={styles.scrollContainer}>


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


        </ScrollView>

        <Button 
          label="Sign In"
          submitHandler={this.submitHandler}/>

      </View>
    );
  };
};

const mapPropsToState = (state) => {
  return {auth: state.auth};
}

const mapPropsToDispatch = (dispatch) => {
  return {
    logIn: (form) => dispatch(logInAction(form))
  };
}

export default connect(mapPropsToState, mapPropsToDispatch)(LoginForm);

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center'
  }
});