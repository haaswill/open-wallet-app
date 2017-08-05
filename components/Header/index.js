import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { colors } from '../../config/styles';
import styles from './styles';

const renderIcon = name => (
  <Icon
    color={colors.white}
    name={name}
    size={35}
    type='material-community'
  />
);

const Header = ({ title }) => (
  <View style={styles.container}>
    {renderIcon('chevron-left')}
    <Text style={styles.title}>{title}</Text>
    {renderIcon('chevron-right')}
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export { Header };
