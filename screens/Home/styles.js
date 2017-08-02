import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../config/styles';

export default StyleSheet.create({
  accountBalanceTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
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
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
