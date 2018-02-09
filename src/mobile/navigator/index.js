import {StackNavigator} from 'react-navigation';

import HomePage from '../components/HomePage'
import LoginPage from '../components/LoginPage'
import RegisterPage from '../components/RegisterPage'
import UserPage from '../components/UserPage'

const RootNavigator = StackNavigator({
  Home: {screen: HomePage},
  Login: {screen: LoginPage},
  Register: {screen: RegisterPage},
  UserPage: {screen: UserPage}
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
});

export default RootNavigator;