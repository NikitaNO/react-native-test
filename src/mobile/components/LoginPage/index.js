import React from 'react'
import {
  View,
  Text
} from 'react-native'

import Page from '../../common/components/Page'
import LoginForm from './form'

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <LoginForm />
      </Page>
    );
  }
};

export default LoginPage;