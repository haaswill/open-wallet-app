import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/types';

const initialState = {
  user: null,
  authorizationHeader: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...initialState, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...initialState,
        user: action.payload.user,
        authorizationHeader: action.payload.authorizationHeader
      };
    case LOGIN_FAIL:
      return initialState;
    default:
      return state;
  }
};
