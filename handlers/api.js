import axios from 'axios';
import { settings } from '../config/settings';

export const get = async (url = '', config = {}) =>
  await axios.get(`${settings.apiUrl}/${url}`, config);

export const post = async (url = '', data = {}, config = {}) =>
  await axios.post(`${settings.apiUrl}/${url}`, data, config);
