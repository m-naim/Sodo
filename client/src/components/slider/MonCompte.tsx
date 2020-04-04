import React, { useState, useEffect } from 'react';
import { TextField, Avatar, Button } from '@material-ui/core';
import useStyles from '../../utils/useStyles';


interface state {
  username: string,
  email: string,
  avatar: string,
}

const MonCompte = () => {
  const session = JSON.parse(localStorage.getItem('session') || 'null');
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users') || 'null'));
  const [userInfos, setuserInfos] = useState(users[session.uid]);
  const classes = useStyles();

  const handleChange = (prop: keyof state) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setuserInfos({ ...userInfos, [prop]: event.target.value });
  };

  useEffect(() => {
    setUsers({ ...users, [session.uid]: userInfos });
    // eslint-disable-next-line
  }, [userInfos]);

  useEffect(() => localStorage.setItem('users', JSON.stringify(users)), [users]);
  return (
    <div className="slider-rigth-container-centerd">
      <Avatar className={classes.large} alt="user avatar" src={userInfos.avatar || 'https://cdn.pixabay.com/photo/2013/07/12/19/33/panda-154984_960_720.png'} />

      <TextField
        className="form-control"
        label="Nom de L'utilisateur"
        name="username"
        onChange={handleChange('username')}
        value={userInfos.username}
      />
      <TextField
        className="form-control"
        label="Email de L'utilisateur"
        name="Email"
        onChange={handleChange('email')}
        value={userInfos.email}
      />

      <Button>Suppimer mon compte</Button>
    </div>
  );
};

export default MonCompte;
