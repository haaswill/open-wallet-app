import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  buttonContainer: {
    flex: 0
  },
  buttonTitle: {
    fontSize: 15
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  modalBody: {
    backgroundColor: colors.white,
  },
  modalHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  modalHeaderText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold'
  },
  title: {
    color: colors.black,
    fontSize: 15,
    fontWeight: 'bold'
  }
});
