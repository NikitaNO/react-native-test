import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native'
import {connect} from 'react-redux'

import Button from './button'
import Page from '../../common/components/Page'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.checkIfUserLoggedIn(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkIfUserLoggedIn(nextProps)
  }

  checkIfUserLoggedIn(props) {
    const {isLogged} = props;
    const {navigation} = this.props;

    if(isLogged) {
      navigation.navigate('UserPage');
    }
  }

  render() {
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

const mapPropsToState = (state) => {
  return {
    isLogged: state.auth.isLogged
  };
};

export default connect(mapPropsToState)(HomePage);