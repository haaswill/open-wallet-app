import { get } from '../handlers';
import {
  FETCH_WALLETS_START,
  FETCH_WALLETS_SUCCESS,
  FETCH_WALLETS_FAIL
} from './types';

export const fetchAccountBalance = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_WALLETS_START });
    const { data: { wallets, accountBalance } } = await get('wallet/accountbalance',
      { headers: getState().authentication.authorizationHeader });
    dispatch({ type: FETCH_WALLETS_SUCCESS, payload: { wallets, accountBalance } });
  } catch (error) {
    dispatch({ type: FETCH_WALLETS_FAIL });
  }
};
