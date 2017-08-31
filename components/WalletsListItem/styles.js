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
  icon: {
    marginLeft: 20,
    marginRight: 20
  },
  itemContainer: {
    borderBottomWidth: 0,
    paddingTop: 30,
    paddingBottom: 30
  },
  subtitle: {
    marginTop: 10,
    color: colors.inactiveColor
  },
  title: {
    fontSize: 32,
    color: colors.inactiveColor
  }
});
