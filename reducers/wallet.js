import {
  FETCH_WALLETS_START,
  FETCH_WALLETS_SUCCESS,
  FETCH_WALLETS_FAIL
} from '../actions/types';

const initialState = {
  wallets: [],
  accountBalance: 0,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WALLETS_START:
      return { ...state, loading: true };
    case FETCH_WALLETS_SUCCESS:
      return {
        ...state,
        wallets: action.payload.wallets,
        accountBalance: action.payload.accountBalance
      };
    case FETCH_WALLETS_FAIL:
      return initialState;
    default:
      return state;
  }
};
