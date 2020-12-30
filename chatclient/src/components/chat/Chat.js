import React from 'react';
import { useSelector } from 'react-redux';

const Chat = () => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <div>
      <p>Welcome {user.firstName}</p>
    </div>
  );
};

export default Chat;
