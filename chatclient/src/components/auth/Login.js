import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import injectSheet from 'react-jss';
import loginImage from '../../assets/images/login.svg';
import AuthService from '../../services/authService';
import { login } from '../../actions/authActions';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2.5rem',
    '& > div': {
      '&:first-child': {
        marginLeft: '10px',
      },
    },
  },
  imageHeight: {
    maxHeight: '400px',
  },
  formWidth: {
    width: '400px',
  },
};
const Login = (props) => {
  const { classes, history } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submitLoginForm = (e) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(login({ email, password }, history));
    //AuthService.login({ email, password }).then((res) => console.log(res));
  };
  return (
    <div className={classes.row}>
      <img className={classes.imageHeight} src={loginImage} alt="login" />
      <div style={{ marginLeft: '20px' }}>
        <Form onSubmit={submitLoginForm}>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              style={{ width: '400px' }}
              required="required"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Enter Password</label>
            <input
              type="password"
              required="required"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Field>
          <Button type="submit">Sign In</Button>
        </Form>
        <br />
        <p>
          New to chatApp? <Link to="/register">Register Now</Link>
        </p>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Login);
