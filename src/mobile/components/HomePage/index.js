import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Hello world!</Text>
      </View>
    );
  }
};

export default HomePage;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Cornerstone'
  }
});