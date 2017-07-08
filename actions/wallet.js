import { get } from '../handlers';
import {
  FETCH_WALLETS_START,
  FETCH_WALLETS_SUCCESS,
  FETCH_WALLETS_FAIL
} from './types';

export const fetchWallets = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_WALLETS_START });
  try {
    const { data } =
      await get('wallet', { headers: getState().authentication.authorizationHeader });
    console.log(data);
    const accountBalance = getAccountBalance(data);
    dispatch({ type: FETCH_WALLETS_SUCCESS, payload: { wallets: data, accountBalance } });
  } catch (error) {
    dispatch({ type: FETCH_WALLETS_FAIL, payload: error });
  }
};

const getAccountBalance = (wallets) => {
  let accountBalance = 0;
  wallets.map(wallet => (accountBalance += wallet.value));
  return accountBalance;
};
