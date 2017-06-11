import { AsyncStorage } from 'react-native';
import { Facebook, Google } from 'expo';
import axios from 'axios';
import { settings } from '../config/settings';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from './types';

export const facebookLoginAsync = () => async dispatch => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: LOGIN_SUCCESS, payload: token });
  } else {
    handleFacebookLoginAsync(dispatch);
  }
};

export const googlekLoginAsync = () => async dispatch => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: LOGIN_SUCCESS, payload: token });
  } else {
    handleGoogleLoginAsync(dispatch);
  }
};

const handleFacebookLoginAsync = async dispatch => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(settings.facebookId, {
    permissions: ['public_profile', 'email']
  });
  if (type === 'cancel') {
    return dispatch({ type: LOGIN_FAIL });
  }
  await AsyncStorage.setItem('token', token);
  const user = await getFacebookUserInfoAsync(token);
  dispatch({ type: LOGIN_SUCCESS, payload: user });
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
  await AsyncStorage.setItem('token', accessToken);
  const user = await getGoogleUserInfoAsync(accessToken);
  dispatch({ type: LOGIN_SUCCESS, payload: user });
};

const getFacebookUserInfoAsync = async token => {
  const { data } = await axios.post(`${settings.apiUrl}/user/facebook`, { token });
  return data;
};

const getGoogleUserInfoAsync = async token => {
  const { data } = await axios.post(`${settings.apiUrl}/user/google`, { token });
  return data;
};
