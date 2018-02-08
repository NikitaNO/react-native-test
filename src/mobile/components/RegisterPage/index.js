import React from 'react'
import {
  View,
  Platform,
} from 'react-native'

import Page from '../../common/components/Page'
import RegisterForm from './form'

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <RegisterForm />
      </Page>
    );
  }
};

export default RegisterPage;