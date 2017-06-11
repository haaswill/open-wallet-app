import { combineReducers } from 'redux';
import navigation from './navigation';
import authentication from './authentication';

export default combineReducers({
  navigation,
  authentication
});
