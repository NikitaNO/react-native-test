import axios from 'axios'
const host = 'http://192.168.88.182:8000/auth'

export function logIn(data) {
  return axios.post(`${host}/login`, data);
};

export function signUp(data) {
  return axios.post(`${host}/register`, data);
}