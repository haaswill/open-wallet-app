import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../config/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    flexDirection: 'row',
    minHeight: 60,
    justifyContent: 'space-between',
    marginTop: sizes.statusBar,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  title: {
    color: colors.white,
    fontSize: 30,
    textAlign: 'center'
  }
});
