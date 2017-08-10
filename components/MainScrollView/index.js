import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MainScrollView = ({ header, children, innerContainerStyle = [], outerContainerStyle }) => (
  <View style={outerContainerStyle || styles.container}>
    {header}
    <ScrollView contentContainerStyle={[styles.body, innerContainerStyle]}>
      {children}
    </ScrollView>
  </View>
);

MainScrollView.propTypes = {
  header: PropTypes.element
};

export { MainScrollView };
