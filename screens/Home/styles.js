import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../config/styles';

export default StyleSheet.create({
  accountBalance: {
    backgroundColor: colors.primaryColor,
    margin: 20,
    padding: 10
  },
  accountBalanceTitle: {
    color: colors.secondaryColor,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    backgroundColor: colors.secondaryColor,
    margin: 10
  },
  divider: {
    alignSelf: 'center',
    backgroundColor: '#0f6c7a',
    width: '80%'
  },
  text: {
    color: colors.black,
    fontSize: sizes.primaryTextSize,
    textAlign: 'center'
  },
  title: {
    color: colors.black,
    fontSize: sizes.primaryTextSize,
    fontWeight: sizes.primaryTextWeight,
    textAlign: 'center'
  },
  transaction: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5
  },
  transactionDescription: {
    flex: 3
  },
  walletContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5
  },
  walletDescription: {
    flex: 2
  },
  walletIcon: {
    flex: 1
  }
});
