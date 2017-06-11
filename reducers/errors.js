import {
  FACEBOOK_LOGIN_FAIL
} from '../actions/types';

const initialState = {
  errors: [
    {
      type: 'error',
      message: 'Could not access your facebook account. Please, try again.'
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FACEBOOK_LOGIN_FAIL:
      return [...state.errors, {
        type: 'error',
        message: 'Could not access your facebook account. Please, try again.'
      }];
    default:
      return state;
  }
};
