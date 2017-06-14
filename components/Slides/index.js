import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';

const Slides = ({ children }) => (
  <ScrollView
    horizontal
    style={styles.container}
    pagingEnabled
  >
    {children}
  </ScrollView>
);

export { Slides };
