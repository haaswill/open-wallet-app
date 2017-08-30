import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    minHeight: 50
  },
  header: {
    flex: 1
  },
  itemContainer: {
    paddingTop: 30,
    paddingBottom: 30
  },
  subtitle: {
    marginTop: 10,
    color: colors.inactiveColor
  },
  title: {
    fontSize: 32
  }
});
