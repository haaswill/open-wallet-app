import { combineReducers } from 'redux';
import navigation from './navigation';
import authentication from './authentication';
import wallet from './wallet';
import transaction from './transaction';

export default combineReducers({
  navigation,
  authentication,
  wallet,
  transaction
});
