import axios from 'axios'
import config from '../../config'

const {apiUrl} = config;

export function logIn(data) {
  return axios.post(`${apiUrl}/login`, data);
};

export function signUp(data) {
  return axios.post(`${apiUrl}/register`, data);
}