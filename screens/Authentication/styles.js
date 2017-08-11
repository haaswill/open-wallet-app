import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-around'
  },
  facebookButton: {
    backgroundColor: colors.facebookColor
  },
  googleButton: {
    backgroundColor: colors.googlePlusColor
  },
  text: {
    color: colors.primaryColor,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
