import { combineReducers } from 'redux';
import navigation from './navigation';
import authentication from './authentication';
import wallet from './wallet';
import transaction from './transaction';
import {
  LOGOUT
} from '../actions/types';

const appReducer = combineReducers({
  navigation,
  authentication,
  wallet,
  transaction
});

const rootReducer = (state, action) => {
  let nextState = state;
  if (action.type === LOGOUT) {
    nextState = undefined;
  }

  return appReducer(nextState, action);
};

export default rootReducer;
