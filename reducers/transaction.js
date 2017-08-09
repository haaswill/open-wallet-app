import {
  FETCH_EXPENSES_SUCCESS,
  FETCH_INCOMES_SUCCESS,
  FETCH_TRANSFERS_SUCCESS,
  FETCH_TRANSACTIONS_FAIL
} from '../actions/types';

const initialState = {
  errors: [],
  expenses: [],
  incomes: [],
  transfers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPENSES_SUCCESS:
      return {
        ...state,
        expenses: action.payload
      };
    case FETCH_INCOMES_SUCCESS:
      return {
        ...state,
        incomes: action.payload
      };
    case FETCH_TRANSFERS_SUCCESS:
      return {
        ...state,
        transfers: action.payload
      };
    case FETCH_TRANSACTIONS_FAIL:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};
