import { LOGIN, REGISTER, REGISTER_ERROR, LOGIN_ERROR } from '../actions/types';

const initialState = {
  user: {},
  token: '',
  isLoggedIn: false,
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        user: payload,
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
    default: {
      return state;
    }
  }
};

export default authReducer;
