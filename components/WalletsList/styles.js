import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    marginTop: 0
  },
  transactionsContainer: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 2,
    marginHorizontal: 3
  },
  transactionsDescription: {
  },
  transactionsIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
  transactionsNotFound: {
    color: colors.inactiveColor,
    fontSize: 18,
  },
  transactionsNotFoundContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  transactionsTitle: {
    color: colors.secondaryColor,
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center'
  },
  transactionsValue: {
  },
  walletContainer: {
    flex: 1
  }
});
