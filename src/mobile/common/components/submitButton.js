import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

class SubmitButton extends React.Component {
  render() {
    const {submitHandler, label} = this.props;

    return (
      <TouchableOpacity 
        onPress={submitHandler}
        style={styles.buttonWrap}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
           {label.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
};

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired
};

export default SubmitButton;

const styles = StyleSheet.create({

  buttonWrap: {
    marginTop: 10,
    marginBottom: 30,
    alignSelf: 'flex-end'
  },

  button: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#00ffe1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8
  },

  buttonText: {
    color: '#fff'
  }

});