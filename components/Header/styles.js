import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    flexDirection: 'row',
    minHeight: 60,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  title: {
    color: colors.white,
    fontSize: 30,
    textAlign: 'center'
  }
});
