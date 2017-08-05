import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Header = ({ title, elementLeft, elementRight }) => (
  <View style={styles.container}>
    {elementLeft}
    <Text style={styles.title}>{title}</Text>
    {elementRight}
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export { Header };
