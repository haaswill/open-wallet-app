import { combineReducers } from 'redux';
import navigation from './navigation';
import authentication from './authentication';
import wallet from './wallet';

export default combineReducers({
  navigation,
  authentication,
  wallet
});
