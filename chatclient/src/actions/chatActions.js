import chatService from '../services/chatService';
import { GET_CHAT, SET_CURRENT_CHAT } from './types';

export const getChat = () => (dispatch) => {
  return chatService
    .getChats()
    .then((data) => {
      data.forEach((chat) => {
        chat.Users.forEach((user) => {
          user.status = 'offline';
        });
        chat.Messages.reverse();
      });
      dispatch({ type: GET_CHAT, payload: data });
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

export const setCurrentChat = (chat) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_CHAT,
    payload: chat,
  });
};
