import React from 'react';
import {
  Switch,
  Text,
  View
} from 'react-native';
import styles from './styles';

const TitleSwitch = ({
  containerStyle,
  onChange,
  title,
  titleStyle,
  value,
  ...rest
 }) => (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Switch
        onValueChange={onChange}
        value={value}
        {...rest}
      />
    </View>
  );

export { TitleSwitch };
