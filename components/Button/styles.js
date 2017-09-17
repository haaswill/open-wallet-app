import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  buttonText: {
    color: colors.primaryColor,
    fontSize: 22,
    fontWeight: 'bold'
  }
});
