import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native'
import {connect} from 'react-redux'

import Page from '../../common/components/Page'

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name} = this.props;

    return (
      <Page>
        <Text style={styles.text}>Welcome {name}!</Text>
      </Page>

    );
  }
};

const mapPropsToState = (state) => {
  return {...state.auth};
};

export default connect(mapPropsToState)(UserPage);

const styles = StyleSheet.create({

  text: {
    color: '#fff'
  },

});