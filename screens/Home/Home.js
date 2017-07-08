import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchWallets } from '../../actions';
import { MainView } from '../../components';
import styles from './styles';

class Home extends Component {
  componentWillMount() {
    this.props.fetchWallets();
  }

  render() {
    return (
      <MainView>
        <Card>
          <Text>Account Balance</Text>
          <Text>{this.props.accountBalance}</Text>
        </Card>
        <Card>
          <Text>Expenses</Text>
          <Text>Incomes</Text>
        </Card>
      </MainView>
    );
  }
}

const mapStateToProps = ({ wallet }) => wallet;

export default connect(mapStateToProps, { fetchWallets })(Home);
