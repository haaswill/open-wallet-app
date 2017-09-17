import React, { Component } from 'react';
import { SegmentedControlIOS, TouchableHighlight, Text, View } from 'react-native';
import { connect } from 'react-redux';
import math from 'mathjs';
import { postTransaction } from '../../actions';
import { MainView, Header, Calculator } from '../../components';
import { formatCurrency, formatDate } from '../../handlers';
import { colors } from '../../config/styles';
import styles from './styles';
import '../../extenders';

class AddTransaction extends Component {
  state = {
    backgroundColor: colors.expenseColor,
    isCalculatorVisible: true,
    type: 0,
    value: '0'
  }

  onChangeType = event => {
    const type = event.nativeEvent.selectedSegmentIndex;
    const backgroundColor = type === 0 ? colors.expenseColor : colors.incomeColor;
    this.setState({ backgroundColor, type });
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
      return '0';
    }
  }

  formatDisplayValue = value => {
    let formattedInput = value;
    formattedInput = formattedInput.replaceAll('÷', '/');
    formattedInput = formattedInput.replaceAll('x', '*');
    return formattedInput;
  }

  handleBackspace = value => this.setState({ value: value.slice(0, -1) });

  handleCalculatorDone = value => {
    this.handleEquals(value);
    this.toggleCalculator();
  }

  handleClearInput = () => this.setState({ value: '0' });

  handleEquals = value => {
    const formattedInput = this.formatDisplayValue(value);
    const newValue = this.evaluate(formattedInput);
    this.setState({ value: newValue });
  }

  handleInput = (value, input) => {
    if (value && value.length >= 14) {
      return;
    }
    const newValue = value !== '0' ? value + input : input;
    return this.setState({ value: newValue });
  }

  toggleCalculator = () => this.setState({ isCalculatorVisible: !this.state.isCalculatorVisible });

  renderCalculator = backgroundColor => (
    <Calculator
      mainColor={backgroundColor}
      onButtonPressed={this.onCalculatorButtonPressed}
      value={this.state.value}
    />
  );

  renderHeader = backgroundColor => (
    <Header
      backgroundColor={backgroundColor}
      title='Add Transaction'
    />
  );

  renderForm = backgroundColor => {
    const {
      type,
      value
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={[styles.header, { backgroundColor }]}>
          <SegmentedControlIOS
            onChange={(event) => this.onChangeType(event)}
            selectedIndex={type}
            style={{ margin: 10 }}
            tintColor={colors.white}
            values={['Expense', 'Income']}
          />
          <TouchableHighlight
            onPress={this.toggleCalculator}
            style={[styles.displayButtonContainer, { backgroundColor }]}
          >
            <Text style={styles.displayButtonText}>{formatCurrency(value)}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.body}>

        </View>
        <View style={styles.bottom}>

        </View>
      </View>
    );
  }

  render() {
    const {
      backgroundColor,
      isCalculatorVisible
    } = this.state;
    return (
      <MainView header={this.renderHeader(backgroundColor)}>
        {
          isCalculatorVisible ?
            this.renderCalculator(backgroundColor) :
            this.renderForm(backgroundColor)
        }
      </MainView>
    );
  }
}

export default connect(null, {
  postTransaction
})(AddTransaction);
