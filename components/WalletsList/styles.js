import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    marginTop: 0
  },
  transactionsContainer: {
    alignItems: 'flex-end',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 2,
    marginHorizontal: 3,
    padding: 5
  },
  transactionsDescription: {
    flex: 2,
    fontSize: 14,
    fontWeight: '600'
  },
  transactionsNotFound: {
    color: colors.inactiveColor,
    fontSize: 18,
    textAlign: 'center'
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
  walletContainer: {
    flex: 1
  }
});
