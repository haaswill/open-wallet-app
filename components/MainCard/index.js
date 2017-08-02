import React from 'react';
import { Card } from 'react-native-elements';
import styles from './styles';

const MainCard = ({ children, title, titleStyle, wrapperStyle }) => (
  <Card
    containerStyle={styles.container}
    title={title}
    titleStyle={[styles.title, titleStyle]}
    wrapperStyle={wrapperStyle}
  >
    {children}
  </Card>
);

export { MainCard };
