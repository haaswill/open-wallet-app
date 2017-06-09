import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: sizes.screenWidth
  },
  text: {
    fontSize: 30,
    color: colors.primaryColor,
    textAlign: 'center',
    marginBottom: 15
  },
  button: {
    backgroundColor: colors.primaryColor
  }
});
