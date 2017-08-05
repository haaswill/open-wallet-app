import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../config/styles';

export default StyleSheet.create({
  body: {
    backgroundColor: colors.white,
    flex: 12,
    paddingTop: sizes.statusBar
  },
  container: {
    backgroundColor: colors.primaryColor,
    flex: 1
  }
});
