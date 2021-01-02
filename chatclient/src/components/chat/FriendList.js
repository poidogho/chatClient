import React from 'react';
import injectSheet from 'react-jss';
import { Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentChat } from '../../actions/chatActions';
import Friend from './Friend';

const styles = {
  row: {
    display: 'flex',
    color: 'white',
    justifyContent: 'space-between',
    margin: '5px',
  },
};
const FriendList = (props) => {
  const { classes } = props;
  const chats = useSelector((state) => state.chatReducer.chats);
  const dispatch = useDispatch();

  const openChat = (chat) => {
    dispatch(setCurrentChat(chat));
  };
  return (
    <>
      <div className={classes.row}>
        <h2>Friends</h2>
        <Button size="tiny" inverted color="blue">
          Invite
        </Button>
      </div>

      <div style={{ color: 'white' }}>
        {chats.length > 0 ? (
          chats.map((chat, index) => (
            <Friend onClick={() => openChat(chat)} chat={chat} key={index} />
          ))
        ) : (
          <p>No friend Added</p>
        )}
      </div>
    </>
  );
};

export default injectSheet(styles)(FriendList);
