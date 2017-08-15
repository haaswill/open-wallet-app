import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MainScrollView = ({ header, children, innerContainerStyle = [] }) => (
  <View style={styles.container}>
    {header}
    <ScrollView style={[styles.body, innerContainerStyle]}>
      {children}
    </ScrollView>
  </View >
);

MainScrollView.propTypes = {
  header: PropTypes.element
};

export { MainScrollView };
