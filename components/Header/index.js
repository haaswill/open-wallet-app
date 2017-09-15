import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../config/styles';
import styles from './styles';

const Header = ({ backgroundColor = colors.primaryColor, elementLeft, elementRight, title }) => (
  <View style={[styles.container, { backgroundColor }]}>
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
