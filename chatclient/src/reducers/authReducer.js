import {
  LOGIN,
  REGISTER,
  LOGOUT,
  REGISTER_ERROR,
  LOGIN_ERROR,
} from '../actions/types';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || {},
  token: localStorage.getItem('token') || '',
  isLoggedIn: localStorage.getItem('user') ? true : false,
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
      };
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      return {
        ...state,
        token: '',
        isLoggedIn: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        token: '',
        isLoggedIn: false,
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
