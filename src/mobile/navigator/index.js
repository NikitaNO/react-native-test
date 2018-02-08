import {StackNavigator} from 'react-navigation';

import HomePage from '../components/HomePage'

const RootNavigator = StackNavigator({
  Home: {screen: HomePage}
}, {
  initialRouteName: 'Home',
});

export default RootNavigator;