import React, { Component } from 'react';
import { Text } from 'react-native';
import { MainView, Header } from '../../components';
import styles from './styles';

class Settings extends Component {
  renderHeader() {
    return (
      <Header title='Settings' />
    );
  }

  render() {
    return (
      <MainView header={this.renderHeader()}>
        <Text>Settings Screen</Text>
        <Text>Settings Screen</Text>
        <Text>Settings Screen</Text>
      </MainView>
    );
  }
}

export default Settings;
