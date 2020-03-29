import React from 'react';
import {
  Avatar, Typography,
} from '@material-ui/core';
import UserMenu from './userMenu';


const UserPanel = () => {
  const session = JSON.parse(localStorage.getItem('session') || '{}');
  return (
    <div className="header-card">
      <div className="horizontal-item">
        <Avatar className="avatar" alt="user avatar" src="https://cdn.pixabay.com/photo/2013/07/12/19/33/panda-154984_960_720.png" />
        <Typography variant="h6" className="small-margin">
          {session.username}
        </Typography>
      </div>

      <UserMenu />
    </div>
  );
};
export default UserPanel;
