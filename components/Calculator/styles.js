import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  displayContainer: {
    backgroundColor: colors.primaryColor,
    flex: 1,
    justifyContent: 'center'
  },
  displayText: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right'
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  buttonText: {
    color: colors.primaryColor,
    fontSize: 22,
    fontWeight: 'bold'
  },
  inputContainer: {
    flex: 9
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  }
});
