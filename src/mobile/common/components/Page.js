import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native'

import styles from '../styles/containerStyles'


class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const backgroundImageSrc = require('../../assets/images/texture.png');
    const logoSrc = require('../../assets/images/logo.png');
    const {children} = this.props;

    return (
      <ImageBackground 
        style={styles.backgroundImage} 
        source={backgroundImageSrc}>

        <View style={styles.container}>
          <Image 
            style={styles.imageLogo}
            source={logoSrc}/>
          
          <View style={styles.containerInner}>

            {children}            

          </View>

        </View>

      </ImageBackground>
    );
  }
};

export default Page;