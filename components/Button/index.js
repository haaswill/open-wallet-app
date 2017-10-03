import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { colors } from '../../config/styles';
import styles from './styles';

const Button = ({
  containerStyle = {},
  mainColor,
  onPress,
  title,
  titleStyle = {},
  underlayColor
}) => (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.buttonContainer, containerStyle]}
      underlayColor={underlayColor || colors.inactiveColor}
    >
      <Text style={[styles.buttonText, titleStyle, { color: mainColor }]}>{title}</Text>
    </TouchableHighlight >
  );

export { Button };
