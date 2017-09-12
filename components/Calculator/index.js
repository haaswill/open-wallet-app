import React, { Component } from 'react';
import { View, Text } from 'react-native';
import InputButton from './InputButton';
import styles from './styles';

// input buttons to be displayed in the calculator
const inputButtons = [
  ['c', 'ce'],
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

const initialState = {
  isDecimal: false,
  previousValue: 0,
  value: 0,
  selectedSymbol: null
};

class Calculator extends Component {
  state = initialState;

  onInputButtonPressed = input => {
    switch (typeof input) {
      case 'number':
        return this.handleNumberInput(input);
      default:
        return this.handleStringInput(input);
    }
  }

  handleNumberInput = number => {
    const newValue = (this.state.value * 10) + number;
    this.setState({ value: newValue });
  }

  handleStringInput = string => {
    switch (string) {
      case '/':
      case '*':
      case '+':
      case '-':
        return this.setState({
          previousValue: this.state.value,
          selectedSymbol: string,
          value: 0
        });
      case '=': {
        const symbol = this.state.selectedSymbol;
        const value = this.state.value;
        const previousValue = this.state.previousValue;
        if (!symbol) {
          return;
        }
        return this.setState({
          previousValue: 0,
          value: global.eval(previousValue + symbol + value),
          selectedSymbol: null
        });
      }
      case 'ce':
        return this.setState(initialState);
      case 'c':
        return this.setState({ value: 0 });
      case '.': {

      }
      default:
        return;
    }
  }

  renderInputButtons = () => {
    const rows = inputButtons.map((row, rowIndex) => {
      const inputs = row.map((input, inputIndex) =>
        <InputButton
          highlighted={this.state.selectedSymbol === input}
          key={`${rowIndex}-${inputIndex}`}
          onPress={() => this.onInputButtonPressed(input)}
          value={input}
        />
      );
      return <View style={styles.inputRow} key={`row-${rowIndex}`}>{inputs}</View>;
    });
    return rows;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>
            {this.state.value}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          {this.renderInputButtons()}
        </View>
      </View>
    );
  }
}

export { Calculator };
