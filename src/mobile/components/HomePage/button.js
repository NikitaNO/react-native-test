import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'

class Button extends React.Component {

  state = {
    isTouched: false
  }

  navigateTo = () => {
    const {dest, navigation} = this.props;

    navigation.navigate(dest);
  }

  handlePress = () => {
    this.setState((prevState) => ({
      isTouched: !prevState.isTouched
    }));
  }

  render() {
    const {isTouched} = this.state;
    const {children} = this.props;

    const touchedButtonStyles = isTouched ? styles.touchedButton : {};
    const buttonStyle = [styles.button, touchedButtonStyles];

    const touchedTextStyles = isTouched ? styles.touchedText : {};
    const textStyle = [styles.text, touchedTextStyles];


    return (
      <TouchableWithoutFeedback
        onPress={this.navigateTo}
        onPressIn={this.handlePress}
        onPressOut={this.handlePress}>

        <View style={buttonStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </View>
        
      </TouchableWithoutFeedback>
    );
  }
};

Button.propTypes = {
  navigation: PropTypes.object.isRequired,  
  dest: PropTypes.string.isRequired
};

export default Button;


const styles = StyleSheet.create({
  
    text: {
      fontFamily: 'Cornerstone',
      fontSize: 26,
      color: '#FFF',
    },

    touchedText: {
      color: '#00bcd4'
    },
    
    button: {
      borderWidth: 1,
      borderColor: '#f3f3f3',
      paddingVertical: 10,
      paddingHorizontal: 50,
      marginBottom: 30,
      borderRadius: 30
    },

    touchedButton: {
      borderColor: '#00bcd4'
    }
  
  });