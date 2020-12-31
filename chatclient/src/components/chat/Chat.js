import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';

const Chat = () => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Chat;
