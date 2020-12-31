import axios from 'axios';
import store from '../store';
import { logout } from '../actions/authActions';

const API = axios.create({
  baseURL: 'http://127.0.0.1:3005/api',
  headers: {
    Accept: 'application/json',
  },
});

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status !== 401) {
      throw err;
    }
    if (typeof err.response.data.error.name !== 'undefined') {
      if (err.response.data.error.name === 'TokenExpiredError') {
        store.dispatch(logout());
        throw err;
      }
    }
  }
);

export default API;
