import React, { Component } from 'react';
import { Text } from 'react-native';
import { MainView } from '../../components';
import styles from './styles';

class AddTransaction extends Component {
  render() {
    return (
      <MainView style={styles.container}>
        <Text>AddTransaction Screen</Text>
        <Text>AddTransaction Screen</Text>
        <Text>AddTransaction Screen</Text>
      </MainView>
    );
  }
}

export default AddTransaction;
