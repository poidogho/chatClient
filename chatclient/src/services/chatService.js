import API from './api';

const chatService = {
  getChats: () => {
    return API.get('/chats')
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default chatService;
