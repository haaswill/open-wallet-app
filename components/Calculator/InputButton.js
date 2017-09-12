import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { colors } from '../../config/styles';
import styles from './styles';

const InputButton = ({ highlighted, onPress, value }) => (
  <TouchableHighlight
    onPress={onPress}
    style={[
      styles.inputButtonContainer,
      highlighted ? styles.inputButtonContainerHighlighted : null
    ]}
    underlayColor={colors.inactiveColor}
  >
    <Text style={styles.inputButtonText}>{value}</Text>
  </TouchableHighlight >
);

export default InputButton;
