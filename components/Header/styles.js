import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    backgroundColor: colors.primaryColor,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10
  },
  title: {
    color: colors.white,
    fontSize: 30,
    paddingBottom: 5
  }
});
