import React from 'react'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import AppNavigator from './navigator'
import configureRedux from './redux'

class Root extends React.Component {
  render() {
    const {store, persistor} = configureRedux();

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
};

export default Root;