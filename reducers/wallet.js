import {
  FETCH_WALLETS_SUCCESS,
  FETCH_WALLETS_FAIL
} from '../actions/types';

const initialState = {
  wallets: [],
  accountBalance: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WALLETS_SUCCESS:
      return {
        ...state,
        wallets: action.payload.wallets,
        accountBalance: Number.parseFloat(action.payload.accountBalance)
      };
    case FETCH_WALLETS_FAIL:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};
