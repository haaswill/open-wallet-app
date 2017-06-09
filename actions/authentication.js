import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types';

export const facebookLogin = () => async dispatch => {
  const token = await AsyncStorage.getItem('facebook_token');
  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    handleFacebookLogin(dispatch);
  }
};

const handleFacebookLogin = async dispatch => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync('1435498559841617', {
    permissions: ['public_profile', 'email']
  });
  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }
  await AsyncStorage.setItem('facebook_token', token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
