import { LOGIN, REGISTER, LOGIN_ERROR, REGISTER_ERROR } from './types';
import AuthService from '../services/authService';

export const login = (userData, history) => (dispatch) => {
  return AuthService.login(userData)
    .then((res) => {
      dispatch({
        type: LOGIN,
        payload: res,
      });
      history.push('/');
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err,
      });
    });
};

export const register = (userData, history) => (dispatch) => {
  return AuthService.register(userData)
    .then((res) => {
      dispatch({
        type: REGISTER,
        payload: res,
      });
      history.push('/');
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_ERROR,
        payload: err,
      });
    });
};
