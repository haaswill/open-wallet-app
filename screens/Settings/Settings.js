import React, { Component } from 'react';
import { Text } from 'react-native';
import { MainView } from '../../components';
import styles from './styles';

class Settings extends Component {
  render() {
    return (
      <MainView style={styles.container}>
        <Text>Settings Screen</Text>
        <Text>Settings Screen</Text>
        <Text>Settings Screen</Text>
      </MainView>
    );
  }
}

export default Settings;
