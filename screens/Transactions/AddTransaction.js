import React, { Component } from 'react';
import { Text } from 'react-native';
import { MainView, Header } from '../../components';
import styles from './styles';

class AddTransaction extends Component {
  renderHeader() {
    return (
      <Header title='Add Transaction' />
    );
  }

  render() {
    return (
      <MainView header={this.renderHeader()}>
        <Text>AddTransaction Screen</Text>
        <Text>AddTransaction Screen</Text>
        <Text>AddTransaction Screen</Text>
      </MainView>
    );
  }
}

export default AddTransaction;
