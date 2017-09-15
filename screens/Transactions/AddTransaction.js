import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import math from 'mathjs';
import { postTransaction } from '../../actions';
import { MainView, Header, Calculator } from '../../components';
import { formatCurrency, formatDate } from '../../handlers';
import { string } from '../../extenders';
import { colors } from '../../config/styles';
import styles from './styles';

class AddTransaction extends Component {
  state = {
    isCalculatorVisible: true,
    type: false,
    value: '0'
  }

  onCalculatorButtonPressed = input => {
    const { value } = this.state;
    switch (input) {
      case '⌫':
        return this.handleBackspace(value);
      case 'c':
        return this.handleClearInput();
      case '=':
        return this.handleEquals(value);
      case 'Done':
        return this.handleCalculatorDone(value);
      default: this.handleInput(value, input);
    }
  }

  evaluate = value => {
    try {
      return math.eval(value).toString().truncate(14);
    } catch (error) {
      return null;
    }
  }

  formatDisplayValue = value => {
    let formattedInput = value;
    formattedInput = formattedInput.replaceAll('÷', '/');
    formattedInput = formattedInput.replaceAll('x', '*');
    return formattedInput;
  }

  handleInput = (value, input) => {
    if (value && value.length >= 14) {
      return;
    }
    const newValue = value !== '0' ? value + input : input;
    return this.setState({ value: newValue });
  }

  handleBackspace = value => this.setState({ value: value.slice(0, -1) });

  handleClearInput = () => this.setState({ value: null });

  handleEquals = value => {
    const formattedInput = this.formatDisplayValue(value);
    const newValue = this.evaluate(formattedInput);
    this.setState({ value: newValue });
  }

  handleCalculatorDone = value => {
    this.handleEquals(value);
    this.toggleCalculator();
  }

  toggleCalculator = () => this.setState({ isCalculatorVisible: !this.state.isCalculatorVisible });

  renderCalculator = () => {
    const {
      isCalculatorVisible,
      value
    } = this.state;
    if (isCalculatorVisible) {
      return (
        <Calculator
          onButtonPressed={this.onCalculatorButtonPressed}
          value={value}
        />
      );
    }
    return (
      <Button
        large
        onPress={this.toggleCalculator}
        title={`Total ${formatCurrency(value)}`}
      />
    );
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
        {this.renderCalculator()}
      </MainView>
    );
  }
}

export default connect(null, {
  postTransaction
})(AddTransaction);
