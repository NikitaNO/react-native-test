import {StackNavigator} from 'react-navigation';

import HomePage from '../components/HomePage'
import LoginPage from '../components/LoginPage'
import RegisterPage from '../components/RegisterPage'

const RootNavigator = StackNavigator({
  Home: {screen: HomePage},
  Login: {screen: LoginPage},
  Register: {screen: RegisterPage}
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
});

export default RootNavigator;