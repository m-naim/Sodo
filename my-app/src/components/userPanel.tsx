import React from 'react';
import {
  Avatar, Typography,
} from '@material-ui/core';
import UserMenu from './userMenu';

const UserPanel = () => (
  <div className="header-card">
    <Avatar src="https://cdn.pixabay.com/photo/2013/07/12/19/33/panda-154984_960_720.png" />
    <Typography variant="h6" component="h6">
      Email@gmail.com
    </Typography>

    <UserMenu />
  </div>
);

export default UserPanel;
