import { AsyncStorage } from 'react-native';
import { Facebook, Google } from 'expo';
import axios from 'axios';
import { settings } from '../config/settings';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
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

export const loginUserAsync = token => async dispatch => {
  handleUserAsync(token, dispatch);
};

const handleFacebookLoginAsync = async dispatch => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(settings.facebookId, {
    permissions: ['public_profile', 'email']
  });
  if (type === 'cancel') {
    return dispatch({ type: LOGIN_FAIL });
  }
  return token;
};

const handleGoogleLoginAsync = async dispatch => {
  const { type, accessToken } = await Google.logInAsync({
    androidClientId: settings.androidClientId,
    iosClientId: settings.iosClientId,
    scopes: ['profile', 'email'],
  });
  if (type !== 'success') {
    return dispatch({ type: LOGIN_FAIL });
  }
  return accessToken;
};

const handleUserAsync = async (token, provider, dispatch) => {
  try {
    const { data } = await axios.post(`${settings.apiUrl}/user/${provider}`, { token });
    saveTokenAsync(data.token);
    const authorizationHeader = createAuthorizationHeader(data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: { user: data, authorizationHeader } });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
  }
};

const saveTokenAsync = async token => {
  await AsyncStorage.setItem('token', token);
};

const createAuthorizationHeader = (token = '') => ({ Authorization: `Bearer ${token}` });
