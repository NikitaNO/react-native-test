import React from 'react'
import {Provider} from 'react-redux'

import AppNavigator from './navigator'
import configureRedux from './redux'

class Root extends React.Component {
  render() {
    const {store, persistor} = configureRedux();

    return (
      <Provider store={store}>
          <AppNavigator />
      </Provider>
    );
  }
};

export default Root;