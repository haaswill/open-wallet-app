import React, { Component } from 'react';
import {
  SegmentedControlIOS,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import { connect } from 'react-redux';
import math from 'mathjs';
import moment from 'moment';
import { postTransaction } from '../../actions';
import { MainView, Header, Calculator, Button, DatePicker, TitleSwitch } from '../../components';
import { formatCurrency } from '../../handlers';
import { colors } from '../../config/styles';
import styles from './styles';
import '../../extenders';

class AddTransaction extends Component {
  state = {
    backgroundColor: colors.expenseColor,
    category: 0,
    date: new Date(),
    description: null,
    error: false,
    isCalculatorVisible: true,
    paid: true,
    transactionValue: '0',
    type: 0,
    wallet: 0
  }

  onChangeType = event => {
    const type = event.nativeEvent.selectedSegmentIndex;
    const backgroundColor = type === 0 ? colors.expenseColor : colors.incomeColor;
    this.setState({ backgroundColor, type });
  }

  onCalculatorButtonPressed = input => {
    const { transactionValue } = this.state;
    switch (input) {
      case '⌫':
        return this.handleBackspace(transactionValue);
      case 'c':
        return this.handleClearInput();
      case '=':
        return this.handleEquals(transactionValue);
      case 'Done':
        return this.handleCalculatorDone(transactionValue);
      default: this.handleInput(transactionValue, input);
    }
  }

  evaluate = transactionValue => {
    try {
      return math.eval(transactionValue).toString().truncate(14);
    } catch (error) {
      return '0';
    }
  }

  formatDisplayValue = transactionValue => {
    let formattedInput = transactionValue;
    formattedInput = formattedInput.replaceAll('÷', '/');
    formattedInput = formattedInput.replaceAll('x', '*');
    return formattedInput;
  }

  handleBackspace = transactionValue =>
    this.setState({ transactionValue: transactionValue.slice(0, -1) });

  handleCalculatorDone = transactionValue => {
    this.handleEquals(transactionValue);
    this.toggleCalculator();
  }

  handleClearInput = () => this.setState({ transactionValue: '0' });

  handleEquals = transactionValue => {
    const formattedInput = this.formatDisplayValue(transactionValue);
    const newTransactionValue = this.evaluate(formattedInput);
    this.setState({ transactionValue: newTransactionValue });
  }

  handleInput = (transactionValue, input) => {
    if (transactionValue && transactionValue.length >= 14) {
      return;
    }
    const newTransactionValue = transactionValue !== '0' ? transactionValue + input : input;
    return this.setState({ transactionValue: newTransactionValue });
  }

  handleDateChange = value => this.setState({ date: value });

  handlePaidChange = value => this.setState({ paid: value });

  handleDescriptionChange = value => this.setState({ description: value });

  toggleCalculator = () => this.setState({ isCalculatorVisible: !this.state.isCalculatorVisible });

  renderCalculator = backgroundColor => (
    <Calculator
      mainColor={backgroundColor}
      onButtonPressed={this.onCalculatorButtonPressed}
      value={this.state.transactionValue}
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
      category,
      date,
      description,
      error,
      paid,
      transactionValue,
      type,
      wallet
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
            <Text style={styles.displayButtonText}>{formatCurrency(transactionValue)}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.body}>
          <View style={styles.row}>
            <TextInput
              onChangeText={this.handleDescriptionChange}
              placeholder='Description'
              style={styles.descriptionInput}
              value={description}
            />
          </View>
          <View style={styles.row}>
            <DatePicker
              containerStyle={styles.formItems}
              date={date}
              mainColor={backgroundColor}
              maximumDate={moment().add(100, 'years').toDate()}
              minimumDate={new Date(1900, 1, 1)}
              onDateChange={this.handleDateChange}
              title='Payment Date'
              titleStyle={styles.title}
            />
          </View>
          <View style={styles.row}>
            <TitleSwitch
              containerStyle={styles.formItems}
              onChange={this.handlePaidChange}
              title='Paid'
              titleStyle={styles.title}
              value={paid}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <Button
            mainColor={backgroundColor}
            onPress={() => alert(transactionValue)}
            title='Save!'
          />
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
