import React from 'react';
import { TextField, Avatar } from '@material-ui/core';


const MonCompte = () => {
  const userinfo = {
    username: 'user',
    email: '',
    avatar: 'https://cdn.pixabay.com/photo/2013/07/12/19/33/panda-154984_960_720.png',
  };
  return (
    <div className="slider-rigth-container-centerd">
      <Avatar alt="user avatar" src={userinfo.avatar} />

      <TextField
        label="Nom de L'utilisateur"
        id="username"
        defaultValue={userinfo.username}
      />
      <TextField
        label="Email de L'utilisateur"
        id="Email"
        defaultValue={userinfo.email}
      />
    </div>
  );
};

export default MonCompte;
