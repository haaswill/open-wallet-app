import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/types';

const initialState = {
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { user: action.payload };
    case LOGIN_FAIL:
      return initialState;
    default:
      return state;
  }
};
