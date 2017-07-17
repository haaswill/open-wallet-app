import {
  FETCH_TRANSACTIONS_START,
  FETCH_EXPENSES_SUCCESS,
  FETCH_INCOMES_SUCCESS,
  FETCH_TRANSFERS_SUCCESS,
  FETCH_TRANSACTIONS_FAIL
} from '../actions/types';

const initialState = {
  expenses: [],
  incomes: [],
  transfers: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_START:
      return { ...state, loading: true };
    case FETCH_EXPENSES_SUCCESS:
      return {
        ...state,
        loading: false,
        expenses: action.payload
      };
    case FETCH_INCOMES_SUCCESS:
      return {
        ...state,
        loading: false,
        incomes: action.payload
      };
    case FETCH_TRANSFERS_SUCCESS:
      return {
        ...state,
        loading: false,
        transfers: action.payload
      };
    case FETCH_TRANSACTIONS_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};
