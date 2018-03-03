import React from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MainView = ({ header, children, innerContainerStyle = [], outerContainerStyle }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={outerContainerStyle || styles.container}>
      {header}
      <View style={[styles.body, innerContainerStyle]}>
        {children}
      </View>
    </View>
  </TouchableWithoutFeedback>
);

MainView.propTypes = {
  header: PropTypes.element
};

export { MainView };
