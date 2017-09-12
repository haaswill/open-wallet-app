import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  displayContainer: {
    backgroundColor: colors.primaryColor,
    flex: 2,
    justifyContent: 'center'
  },
  displayText: {
    color: colors.white,
    fontSize: 38,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right'
  },
  inputButtonContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  inputButtonContainerHighlighted: {
    backgroundColor: colors.secondaryColor
  },
  inputButtonText: {
    color: colors.primaryColor,
    fontSize: 22,
    fontWeight: 'bold'
  },
  inputContainer: {
    flex: 8
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  }
});
