import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { colors } from '../../config/styles';
import styles from './styles';

const Button = ({ onPress, value }) => (
  <TouchableHighlight
    onPress={onPress}
    style={styles.buttonContainer}
    underlayColor={colors.inactiveColor}
  >
    <Text style={styles.buttonText}>{value}</Text>
  </TouchableHighlight >
);

export default Button;
