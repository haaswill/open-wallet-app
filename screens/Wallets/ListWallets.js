import React, { Component } from 'react';
import { Text } from 'react-native';
import { MainView } from '../../components';
import styles from './styles';

class ListWallets extends Component {
  render() {
    return (
      <MainView style={styles.container}>
        <Text>ListWallets Screen</Text>
        <Text>ListWallets Screen</Text>
        <Text>ListWallets Screen</Text>
      </MainView>
    );
  }
}

export { ListWallets };
