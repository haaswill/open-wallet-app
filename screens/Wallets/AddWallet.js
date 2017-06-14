import React, { Component } from 'react';
import { Text } from 'react-native';
import { MainView } from '../../components';
import styles from './styles';

class AddWallet extends Component {
  render() {
    return (
      <MainView style={styles.container}>
        <Text>AddWallet Screen</Text>
        <Text>AddWallet Screen</Text>
        <Text>AddWallet Screen</Text>
      </MainView>
    );
  }
}

export { AddWallet };
