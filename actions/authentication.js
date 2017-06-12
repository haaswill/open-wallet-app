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
  const provider = 'facebook';
  let token = await getTokenAsync(provider);
  if (!token) {
    token = await handleFacebookLoginAsync(dispatch);
  }
  await saveTokenAsync(token);
  await handleUserAsync(token, provider, dispatch);
};

export const googlekLoginAsync = () => async dispatch => {
  dispatch({ type: LOGIN_START });
  const provider = 'google';
  let token = await getTokenAsync(provider);
  if (!token) {
    token = await handleGoogleLoginAsync(dispatch);
  }
  await saveTokenAsync(token);
  await handleUserAsync(token, provider, dispatch);
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
  const { data } = await axios.post(`${settings.apiUrl}/user/${provider}`, { token });
  dispatch({ type: LOGIN_SUCCESS, payload: { user: data, token } });
};

const saveTokenAsync =
  async (token, provider) => await AsyncStorage.setItem(`token_${provider}`, token);

const getTokenAsync = async provider => await AsyncStorage.getItem(`token_${provider}`);
