import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { postTransaction } from '../../actions';
import { MainView, Header, Calculator } from '../../components';
import { colors } from '../../config/styles';
import styles from './styles';

class AddTransaction extends Component {
  state = {
    type: false
  }

  renderHeader() {
    return (
      <Header title='Add Transaction' />
    );
  }

  render() {
    const color = this.state.type ? colors.incomeColor : colors.expenseColor;
    return (
      <MainView header={this.renderHeader()}>
        <Calculator />
      </MainView>
    );
  }
}

export default connect(null, {
  postTransaction
})(AddTransaction);
