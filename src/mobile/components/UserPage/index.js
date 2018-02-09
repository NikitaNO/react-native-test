import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  BackAndroid
} from 'react-native'
import {connect} from 'react-redux'

import Page from '../../common/components/Page'

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigatorStyle = {
    disabledBackGesture: true,
  };

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.backHandler);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.backHandler);
  }

  backHandler() {
    return true;
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
    fontSize: 28,
    fontFamily: 'Cornerstone',
    color: '#00ffe1'
  },

});