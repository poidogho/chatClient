import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  creator: {
    justifyContent: 'flex-end',
  },

  mb5: {
    marginbottom: '5px',
  },

  mb10: {
    marginBottom: '10px',
  },

  message: {
    display: 'flex',
    paddingRight: '5px',
    textAlign: 'left',

    p: {
      wordwrap: 'break-word',
      wordBreak: 'break-word',
    },

    '&>div': {
      borderRadius: '20px',
    },

    owner: {
      backgroundColor: '#793EDD',
      color: 'white',
      padding: '10px',
    },

    otherPerson: {
      backgroundColor: '#793EDD',
      padding: '10px',
    },

    dots: {
      margin: '-5px 0 3px 0',
    },

    img: {
      maxWidth: '200px',
    },
  },
};
const Messanger = (props) => {
  const { classes } = props;

  return <div></div>;
};

export default injectSheet(styles)(Messanger);
