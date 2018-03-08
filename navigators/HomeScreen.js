import React from 'react';
import { Icon } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';
import { colors } from '../config/styles';

// Screens
import { Home } from '../screens/Home';
import { AddTransaction } from '../screens/Transactions';
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

const HomeScreen = ({ navigation }) =>
  <MainNavigator screenProps={{ rootNavigation: navigation }} />;

export { HomeScreen };
