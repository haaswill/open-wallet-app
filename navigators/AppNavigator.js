import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { colors } from '../config/styles';

// Screens
import { Splash } from '../screens/Splash';
import { Authentication } from '../screens/Authentication';
import { Home } from '../screens/Home';
import { AddWallet, ListWallets } from '../screens/Wallets';
import { AddTransaction, ListTransactions } from '../screens/Transactions';
import { AddTransactionTypes } from '../screens/TransactionTypes';
import { Settings } from '../screens/Settings';

const AuthenticationNavigator = StackNavigator({
  Authentication: {
    screen: Authentication,
    navigationOptions: {
      title: 'Authentication',
      headerTintColor: colors.primaryColor
    }
  }
});

const MainNavigator = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Icon name='home' size={30} color={tintColor} type='material-community' />
      }
    },
    AddTransaction: {
      screen: AddTransaction,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Icon name='plus-circle' size={30} color={tintColor} type='material-community' />
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Icon name='settings' size={30} color={tintColor} type='material-community' />
      }
    }
  }, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: colors.primaryColor,
      inactiveTintColor: colors.inactiveColor,
      showLabel: false,
      style: {
        backgroundColor: colors.white
      }
    }
  }
);

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

const mapStateToProps = ({ navigation }) => ({ navigation });

export default connect(mapStateToProps)(AppWithNavigationState);
