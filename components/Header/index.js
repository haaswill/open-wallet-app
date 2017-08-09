import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Header = ({ title, elementLeft, elementRight }) => (
  <View style={styles.container}>
    <StatusBar barStyle='light-content' />
    {elementLeft}
    <Text style={styles.title}>{title}</Text>
    {elementRight}
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export { Header };
