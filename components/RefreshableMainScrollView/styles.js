import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  body: {
    backgroundColor: colors.white
  },
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  spinner: {
    flex: 1,
    justifyContent: 'center'
  }
});
