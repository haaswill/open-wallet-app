import { get } from '../handlers';
import {
  FETCH_EXPENSES_SUCCESS,
  FETCH_INCOMES_SUCCESS,
  FETCH_WALLET_TRANSACTIONS_SUCCESS,
  FETCH_WALLET_TRANSACTIONS_START,
  FETCH_TRANSFERS_SUCCESS,
  FETCH_TRANSACTIONS_FAIL
} from './types';

export const fetchExpenses = () => async (dispatch, getState) => {
  try {
    const { data } =
      await get('transaction/expenses', { headers: getState().authentication.authorizationHeader });
    dispatch({ type: FETCH_EXPENSES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_TRANSACTIONS_FAIL });
  }
};

export const fetchIncomes = () => async (dispatch, getState) => {
  try {
    const { data } =
      await get('transaction/incomes', { headers: getState().authentication.authorizationHeader });
    dispatch({ type: FETCH_INCOMES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_TRANSACTIONS_FAIL });
  }
};

export const fetchTransactionsByWalletId = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_WALLET_TRANSACTIONS_START });
    const { data } =
      await get(`transaction/wallet/${id}`,
        { headers: getState().authentication.authorizationHeader });
    dispatch({ type: FETCH_WALLET_TRANSACTIONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_TRANSACTIONS_FAIL });
  }
};

export const fetchTransfers = () => async (dispatch, getState) => {
  try {
    const { data } =
      await get('transaction/transfers',
        { headers: getState().authentication.authorizationHeader });
    dispatch({ type: FETCH_TRANSFERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_TRANSACTIONS_FAIL });
  }
};

export const postTransaction = () => async (dispatch, getState) => {
  try {
    console.log('post');
  } catch (error) {
    console.log(error);
  }
};
