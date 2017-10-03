import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  body: {
    flex: 3
  },
  bottom: {
    flex: 1
  },
  container: {
    flex: 1
  },
  descriptionInput: {
    color: colors.inactiveColor,
    fontSize: 15,
    fontWeight: 'bold',
    height: 60,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  displayButtonContainer: {
    justifyContent: 'center',
    margin: 20
  },
  displayButtonText: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  formItems: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  header: {
    flex: 1
  },
  row: {
    borderColor: colors.inactiveColor,
    borderBottomWidth: 1
  },
  title: {
    color: colors.inactiveColor,
    fontSize: 15,
    fontWeight: 'bold'
  }
});
