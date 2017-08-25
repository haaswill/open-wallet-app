import axios from 'axios';
import { settings } from '../config/settings';

export const get = (url = '', config = {}) =>
  axios.get(`${settings.apiUrl}/${url}`, config);

export const post = (url = '', data = {}, config = {}) =>
  axios.post(`${settings.apiUrl}/${url}`, data, config);
