import React from 'react';
import injectSheet from 'react-jss';
import { useSelector } from 'react-redux';
import avatarImg from '../../assets/images/avatar.svg';
import { userStatus } from '../../utils';

const styles = {
  friend: {
    textAlign: 'left',
    fontSize: '16px',
    paddingLeft: '12px',
  },
  opened: {
    backgroundColor: '#ececec',
  },
  friendStatus: {
    display: 'flex',
    alignItems: 'center',
    justifycontent: 'center',
  },
  online: {
    backgroundColor: '#42b983',
  },
  offline: {
    backgroundColor: '#b94242',
  },
  onlineStatus: {
    display: 'flex',
    borderRadius: '50%',
    width: '10px',
    height: '10px',
  },
  friendInfo: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
  },
};
const Friend = ({ chat, classes, onClick }) => {
  const currentChat = useSelector((state) => state.chatReducer.currentChat);

  const isChatOpened = () => {
    return currentChat.id === chat.id ? classes.opened : '';
  };

  const lastMessage = () => {
    if (chat.Messages.length === 0) return '';

    const message = chat.Messages[chat.Messages.length - 1];
    return message.type === 'image' ? 'image uploaded' : message.message;
  };
  return (
    <div className={`${classes.friend} ${isChatOpened()}`} onClick={onClick}>
      <div>
        <img
          src={chat.Users[0].avatar || avatarImg}
          height="20"
          width="20"
          alt="user avatar"
        />
        <div
          className={classes.friendInfo}
          style={{ display: 'inline-block', marginLeft: '10px' }}
        >
          <p>
            {chat.Users[0].firstName} {chat.Users[0].lastName}
          </p>
          <p>{lastMessage()}</p>
        </div>
      </div>
      <div className={classes.friendStatus}>
        <span
          className={`${classes.onlineStatus} ${userStatus(chat.Users[0])}`}
          style={{ backgroundColor: '#b94242' }}
        ></span>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Friend);
