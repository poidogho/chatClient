import { GET_CHAT, SET_CURRENT_CHAT } from '../actions/types';

const initialState = {
  chats: [],
  currentChat: {},
};

const chatReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CHAT:
      return {
        ...state,
        chats: payload,
      };
    case SET_CURRENT_CHAT:
      return {
        ...state,
        currentChat: payload,
      };
    default: {
      return state;
    }
  }
};

export default chatReducer;
