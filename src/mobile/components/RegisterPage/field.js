import React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  DeviceEventEmitter
} from 'react-native'
import PropTypes from 'prop-types'
import validator from 'validator';

class Field extends React.Component {

  state = {
    value: '',
    hasError: false,
    isValid: false
  }

  componentWillMount() {
    const {label} = this.props;

    DeviceEventEmitter.addListener(`${label}ValidationSuccess`, this.handleSuccessValidation);
    DeviceEventEmitter.addListener(`${label}ValidationError`, this.handleErrorValidation)    
  }

  handleErrorValidation = () => {
      this.setState({hasError: true, isValid: false});
  }

  handleSuccessValidation = () => {
    this.setState({hasError: false, isValid: true});          
  }

  handleChange = (text) => {
    const {onChange, label} = this.props;

    onChange(text, label);
    this.setState({value: text});
  }

  render() {
    const {value, hasError, isValid} = this.state;
    const {label, isRequired, errorMessage, isPassword} = this.props;

    const textSuccessStyles = isValid ? styles.textSuccess : {};
    const textErrorStyles = hasError ? styles.textError : {};
    const textStyles = [styles.text, textSuccessStyles, textErrorStyles];

    const textInputSuccessStyles = isValid ? styles.textInputSuccess : {};
    const textInputErrorStyles = hasError ? styles.textInputError : {};
    const textInputStyles = [styles.textInput, textInputSuccessStyles, textInputErrorStyles];

    return (
      <View style={styles.field}>
        <Text style={textStyles}>{`${label.toUpperCase()}${isRequired ? '*' : ''}`}</Text>
        <TextInput 
          value={value}
          onChangeText={this.handleChange}
          secureTextEntry={isPassword}
          underlineColorAndroid='transparent'
          style={textInputStyles}/>
        {hasError && 
          <Text style={styles.errorTooltip}>
            {errorMessage}
          </Text>}
      </View>
    );
  };
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  isPassword: PropTypes.bool,
  isRequired: PropTypes.bool,
  validateFunc: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Field;

const styles = StyleSheet.create({

  field: {
    marginBottom: 20
  },
  
  text: {
    marginBottom: 5,
    color: '#fff'
  },

  textSuccess: {
    color: "#00ffe1"
  },

  textError: {
    color: '#f45f5f'
  },

  textInput: {
    width: 200,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 8
  },

  textInputError: {
    borderColor: '#f45f5f'
  },

  textInputSuccess: {
    borderColor: "#00ffe1"
  },

  errorTooltip: {
    fontSize: 13,
    color: '#f45f5f'
  }
});