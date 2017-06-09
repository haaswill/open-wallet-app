import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: colors.secondaryColor,
    flex: 1,
    justifyContent: 'space-around',
  },
  facebookButton: {
    backgroundColor: colors.facebookColor,
  },
  googlePlusButton: {
    backgroundColor: colors.googlePlusColor
  },
  text: {
    color: colors.primaryColor,
    fontSize: 36,
    fontWeight: '900',
    textAlign: 'center'
  }
});
