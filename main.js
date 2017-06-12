import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import store from './config/store';
import AppWithNavigationState from './navigators/AppNavigator';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
