import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import { MainView } from '../../components';
import styles from './styles';

class Home extends Component {
  render() {
    return (
      <MainView>
        <Card>
          <Text>Account Balance</Text>
        </Card>
        <Card>
          <Text>Expenses</Text>
          <Text>Incomes</Text>
        </Card>
      </MainView>
    );
  }
}

export default Home;
