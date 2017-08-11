import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    justifyContent: 'flex-start',
    marginTop: 0
  },
  icon: {
    marginLeft: 20,
    marginRight: 20
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
