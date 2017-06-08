import { StyleSheet, Dimensions } from 'react-native';
import { styles } from '../../config/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  text: {
    fontSize: 30,
    color: styles.primaryColor,
    textAlign: 'center',
    marginBottom: 15
  },
  button: {
    backgroundColor: styles.secondaryColor
  }
});
