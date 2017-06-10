import { combineReducers } from 'redux';
import navigation from './navigation';
import errors from './errors';

export default combineReducers({
  navigation,
  errors
});
