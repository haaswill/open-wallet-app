import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MainView = ({ header, children, innerContainerStyle = [], outerContainerStyle }) => (
  <View style={outerContainerStyle || styles.container}>
    {header}
    <View style={[styles.body, innerContainerStyle]}>
      {children}
    </View>
  </View>
);

MainView.propTypes = {
  header: PropTypes.element
};

export { MainView };
