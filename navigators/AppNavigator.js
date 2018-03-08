import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { addListener } from '../config/redux';

// Screens
import { Splash } from '../screens/Splash';
import { Authentication } from '../screens/Authentication';
import { HomeScreen } from './HomeScreen';

export const AppNavigator = StackNavigator(
  {
    Splash: {
      screen: Splash
    },
    Authentication: {
      screen: Authentication
    },
    Main: {
      screen: HomeScreen,
      path: 'Main'
    }
  },
  {
    headerMode: 'none',
    lazy: false
  }
);

const AppWithNavigationState = ({ dispatch, navigation }) => (
  <AppNavigator
    navigation={addNavigationHelpers({ dispatch, state: navigation, addListener })}
  />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = ({ navigation }) => ({ navigation });

export default connect(mapStateToProps)(AppWithNavigationState);
