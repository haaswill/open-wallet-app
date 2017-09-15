import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import styles from './styles';

// input buttons to be displayed in the calculator
const inputButtons = [
  ['c', '⌫'],
  ['1', '2', '3', '÷'],
  ['4', '5', '6', 'x'],
  ['7', '8', '9', '-'],
  ['0', '.', '=', '+'],
  ['Done']
];

const Calculator = ({ mainColor, onButtonPressed, value }) => {
  const renderButtons = () => {
    const rows = inputButtons.map((row, rowIndex) => {
      const buttons = row.map((button, buttonIndex) =>
        <Button
          key={`${rowIndex}-${buttonIndex}`}
          mainColor={mainColor}
          onPress={() => onButtonPressed(button)}
          value={button}
        />
      );
      return <View style={styles.inputRow} key={`row-${rowIndex}`}>{buttons}</View>;
    });
    return rows;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.displayContainer, { backgroundColor: mainColor }]}>
        <Text style={styles.displayText}>
          {value}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        {renderButtons()}
      </View>
    </View>
  );
};

export { Calculator };
