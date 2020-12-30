import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import injectSheet from 'react-jss';
import { register } from '../../actions/authActions';
import registerImage from '../../assets/images/register.svg';

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

const Register = (props) => {
  const { classes, history } = props;

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const submitRegisterForm = (e) => {
    e.preventDefault();
    dispatch(register({ firstName, lastName, email, password }, history));
  };
  return (
    <div className={classes.row}>
      <img className={classes.imageHeight} src={registerImage} alt="login" />
      <div style={{ marginLeft: '20px' }}>
        <Form onSubmit={submitRegisterForm}>
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              style={{ width: '400px' }}
              required="required"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              required="required"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
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
          <Button type="submit">Register</Button>
        </Form>
        <br />
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};
export default injectSheet(styles)(Register);
