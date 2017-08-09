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
    color: colors.primaryColor,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },
  button: {
    backgroundColor: colors.primaryColor
  }
});
