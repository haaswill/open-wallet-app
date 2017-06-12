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
  let { token, provider } = await getTokenAsync();
  if (!token || provider !== 'facebook') {
    token = await handleFacebookLoginAsync(dispatch);
    provider = 'facebook';
  }
  await saveTokenAsync(token, provider);
  await handleUserAsync(token, provider, dispatch);
};

export const googleLoginAsync = () => async dispatch => {
  dispatch({ type: LOGIN_START });
  let { token, provider } = await getTokenAsync();
  if (!token || provider !== 'google') {
    token = await handleGoogleLoginAsync(dispatch);
    provider = 'google';
  }
  await saveTokenAsync(token, provider);
  await handleUserAsync(token, provider, dispatch);
};

export const loginUserAsync = (token, provider) => async dispatch => {
  handleUserAsync(token, provider, dispatch);
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
    dispatch({ type: LOGIN_SUCCESS, payload: { user: data, token } });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
  }
};

const saveTokenAsync = async (token, provider) => {
  await AsyncStorage.setItem('token', token);
  await AsyncStorage.setItem('provider', provider);
};

const getTokenAsync = async () => {
  const token = await AsyncStorage.getItem('token');
  const provider = await AsyncStorage.getItem('provider');
  return { token, provider };
};
