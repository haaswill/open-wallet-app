import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';

const Slides = ({ children }) => (
  <ScrollView
    horizontal
    indicatorStyle='white'
    pagingEnabled
    style={styles.container}
  >
    {children}
  </ScrollView>
);

export { Slides };
