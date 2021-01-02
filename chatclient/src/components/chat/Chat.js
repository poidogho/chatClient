import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChat } from '../../actions/chatActions';
import FriendList from './FriendList';
import Messanger from './Messanger';
import Navbar from './Navbar';

const Chat = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  useEffect(() => {
    dispatch(getChat())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div>
        <Messanger />
      </div>
    </div>
  );
};

export default Chat;
