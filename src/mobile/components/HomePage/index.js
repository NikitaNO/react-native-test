import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native'

import Button from './button'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const backgroundImageSrc = require('../../assets/images/texture.png');
    const logoSrc = require('../../assets/images/logo.png');
    const {navigation} = this.props;

    return (
      <ImageBackground 
        style={styles.backgroundImage} 
        source={backgroundImageSrc}>

        <View style={styles.container}>
          <Image 
            style={styles.imageLogo}
            source={logoSrc}/>
          
          <View style={styles.buttonsContainer}>

            <Button 
              navigation={navigation}
              dest="Register">
              Sign Up
            </Button>

            <Button 
              navigation={navigation}                            
              dest="Login">
              Sign In
            </Button>
          </View>

        </View>

      </ImageBackground>
    );
  }
};

export default HomePage;

const styles = StyleSheet.create({

  backgroundImage: {
    width: '100%',
    height: '100%'
  },

  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%'
  },

  buttonsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageLogo: {
    marginTop: 30
  },

});