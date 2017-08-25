import { AsyncStorage } from 'react-native';
import { Facebook, Google } from 'expo';
import { settings } from '../config/settings';
import { post } from '../handlers';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

export const facebookLoginAsync = () => async dispatch => {
  dispatch({ type: LOGIN_START });
  const token = await handleFacebookLoginAsync(dispatch);
  await handleUserAsync(token, 'facebook', dispatch);
};

export const googleLoginAsync = () => async dispatch => {
  dispatch({ type: LOGIN_START });
  const token = await handleGoogleLoginAsync(dispatch);
  await handleUserAsync(token, 'google', dispatch);
};

export const logOut = () => ({ type: LOGOUT });

const handleFacebookLoginAsync = async dispatch => {
  try {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(settings.facebookId, {
      permissions: ['public_profile', 'email']
    });
    if (type === 'cancel') {
      return dispatch({ type: LOGIN_FAIL });
    }
    return token;
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
  }
};

const handleGoogleLoginAsync = async dispatch => {
  try {
    const { type, accessToken } = await Google.logInAsync({
      androidClientId: settings.androidClientId,
      iosClientId: settings.iosClientId,
      scopes: ['profile', 'email'],
    });
    if (type !== 'success') {
      return dispatch({ type: LOGIN_FAIL });
    }
    return accessToken;
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
  }
};

const handleUserAsync = async (token, provider, dispatch) => {
  try {
    const { data: { user } } = await post(`user/${provider}`, { token });
    await saveTokenAsync(user.token);
    const authorizationHeader = createAuthorizationHeader(user.token);
    dispatch({ type: LOGIN_SUCCESS, payload: { user, authorizationHeader } });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
  }
};

const saveTokenAsync = async token => {
  await AsyncStorage.setItem('token', token);
};

const createAuthorizationHeader = (token = '') => ({ Authorization: `Bearer ${token}` });
