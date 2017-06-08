import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';

const Slides = ({ children }) => (
  <ScrollView
    horizontal
    style={styles.outerContainer}
    pagingEnabled
  >
    {children}
  </ScrollView>
);

export default Slides;
