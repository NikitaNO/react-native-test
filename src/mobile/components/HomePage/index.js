import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native'

import Button from './button'
import Page from '../../common/components/Page'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const backgroundImageSrc = require('../../assets/images/texture.png');
    const logoSrc = require('../../assets/images/logo.png');
    const {navigation} = this.props;

    return (
      <Page>
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
      </Page>

    );
  }
};

export default HomePage;