import React, { Component } from 'react';
import { Text } from 'react-native';
import { MainView } from '../../components';
import styles from './styles';

class ListTransactions extends Component {
  render() {
    return (
      <MainView style={styles.container}>
        <Text>ListTransactions Screen</Text>
        <Text>ListTransactions Screen</Text>
        <Text>ListTransactions Screen</Text>
      </MainView>
    );
  }
}

export default ListTransactions;
