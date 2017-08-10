import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  buttonContainer: {
    flex: 1,
    padding: 10
  },
  container: {
    alignItems: 'stretch',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-around'
  },
  facebookButton: {
    backgroundColor: colors.facebookColor,
    height: '100%',
    width: '100%'
  },
  googleButton: {
    backgroundColor: colors.googlePlusColor,
    height: '100%',
    width: '100%'
  },
  text: {
    color: colors.primaryColor,
    fontSize: 36,
    fontWeight: '900',
    textAlign: 'center'
  }
});
