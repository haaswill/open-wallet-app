import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  title: {
    color: colors.black,
    fontSize: 15,
    fontWeight: 'bold'
  }
});
