import {
  FACEBOOK_LOGIN_FAIL
} from '../actions/types';

const initialState = {
  errors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FACEBOOK_LOGIN_FAIL:
      return [...state.errors, { message: 'Could not access your facebook account. Please, try again.' }];
    default:
      return state;
  }
};
