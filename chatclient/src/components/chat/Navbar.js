import React, { useState } from 'react';
import {
  Dropdown,
  Button,
  Modal,
  Header,
  Image,
  Form,
} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions';
import menuLogo from '../../assets/images/menu.png';
import avatarImg from '../../assets/images/avatar.svg';

const Navbar = () => {
  const user = useSelector((state) => state.authReducer.user);
  const [openNavbar, setOpenNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState('');

  const dispatch = useDispatch();

  console.log(user);

  const options = [
    {
      key: `${user.firstName}`,
      text: `${user.firstName}`,
      value: `${user.firstName}`,
      image: { avatar: true, src: `${avatarImg}` },
    },
    {
      text: <Button onClick={() => setOpen(true)}>Profile</Button>,
      value: 'Profile',
    },
    {
      text: <Button onClick={() => dispatch(logout())}>Logout</Button>,
      value: 'Log Out',
    },
  ];

  const closeNav = (e) => {
    e.preventDefault();
    setOpenNavbar(false);
  };

  const submitRegisterForm = (e) => {
    e.preventDefault();
    const userData = { firstName, lastName, email, password, avatar };
    const formData = new FormData();

    for (const key in userData) {
      formData.append(key, userData[key]);
    }
  };

  return (
    <div>
      <div className="logo">
        <b>ChatApp</b>
      </div>
      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: openNavbar ? '240px' : '0px' }}
      >
        <span
          style={{
            paddingRight: '1em',
            fontSize: '16px',
            top: 0,
            color: 'white',
          }}
        >
          <Dropdown inline options={options} defaultValue={options[0].value} />
        </span>{' '}
        <a href="!#" className="closebtn" onClick={(e) => closeNav(e)}>
          &times;
        </a>
      </div>

      <div className="nav-menu">
        <span onClick={() => setOpenNavbar(true)}>
          <img src={menuLogo} alt="menu" height="50px" />
        </span>
      </div>
      {open ? (
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
        >
          <Modal.Header>Update Profile</Modal.Header>
          <Modal.Content image>
            <Image size="medium" src={avatarImg} wrapped />
            <Modal.Description>
              <Header>Default Profile Image</Header>
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
                <Form.Field>
                  <label>Change Avatar</label>
                  <input
                    type="file"
                    onChange={(e) => setAvatar(e.target.files[0])}
                  />
                </Form.Field>
                <Button type="submit">Update Profile</Button>
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={() => setOpen(false)}>
              Close
            </Button>
            {/* <Button
              content="Yep, that's me"
              labelPosition="right"
              icon="checkmark"
              onClick={() => setOpen(false)}
              positive
            /> */}
          </Modal.Actions>
        </Modal>
      ) : null}
    </div>
  );
};

export default Navbar;
