import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title: {
    color: colors.white,
    fontSize: 30,
    textAlign: 'center'
  }
});
