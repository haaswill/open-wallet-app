import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, StackNavigator } from 'react-navigation';

// Screens
import { Splash } from '../screens/Splash';
import { SignIn, SignUp } from '../screens/Authentication';
import { Home } from '../screens/Home';
import { AddWallet, ListWallets } from '../screens/Wallets';
import { AddTransaction, ListTransactions } from '../screens/Transactions';
import { AddTransactionTypes } from '../screens/TransactionTypes';
import { Settings } from '../screens/Settings';

export const AuthenticationNavigator = StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Sign In'
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up'
    }
  }
});

export const MainNavigator = TabNavigator({
  Home: {
    screen: Home
  },
  AddTransaction: {
    screen: AddTransaction
  },
  Settings: {
    screen: Settings
  }
});

export const AppNavigator = TabNavigator(
  {
    Splash: {
      screen: Splash
    },
    Authentication: {
      screen: AuthenticationNavigator
    },
    Main: {
      screen: MainNavigator
    }
  },
  {
    lazy: true,
    navigationOptions: {
      tabBarVisible: false
    }
  }
);

const AppWithNavigationState = ({ dispatch, navigation }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: navigation })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  navigation: state.navigation
});

export default connect(mapStateToProps)(AppWithNavigationState);
