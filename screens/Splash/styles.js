import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../config/styles';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    flex: 1,
    justifyContent: 'center',
    width: sizes.screenWidth
  },
  text: {
    color: colors.secondaryColor,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  }
});
