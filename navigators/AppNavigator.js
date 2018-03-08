import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { colors } from '../config/styles';
import { addListener } from '../config/redux';

// Screens
import { Splash } from '../screens/Splash';
import { Authentication } from '../screens/Authentication';
import { Home } from '../screens/Home';
import { AddWallet, ListWallets } from '../screens/Wallets';
import { AddTransaction, ListTransactions } from '../screens/Transactions';
import { AddTransactionTypes } from '../screens/TransactionTypes';
import { Settings } from '../screens/Settings';

const renderTabBarIcon = (name, tintColor) =>
  <Icon name={name} size={30} color={tintColor} type='material-community' />;

const MainNavigator = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => renderTabBarIcon('home', tintColor)
      }
    },
    AddTransaction: {
      screen: AddTransaction,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => renderTabBarIcon('plus-circle', tintColor)
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => renderTabBarIcon('settings', tintColor)
      }
    }
  }, {
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: colors.primaryColor,
      inactiveTintColor: colors.inactiveColor,
      showLabel: false,
      style: {
        backgroundColor: colors.white
      }
    },
    swipeEnabled: true
  }
);

export const AppNavigator = TabNavigator(
  {
    Splash: {
      screen: Splash
    },
    Authentication: {
      screen: Authentication
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
