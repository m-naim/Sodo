import React, { Component } from 'react';
import ListsContainer from './listes/ListsContainer'

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useStyles } from '../utils/useStyles';
import Divider from '@material-ui/core/Divider';
import { Paper, Typography } from '@material-ui/core';


function SideBar() {
  const classes = useStyles();

  return (
    <Paper square className="side-container" >
      <Paper square className='user-card' >
        <Avatar src='https://cdn.pixabay.com/photo/2013/07/12/19/33/panda-154984_960_720.png'></Avatar>
        <Typography variant="h6" component="h6" >
          Email@gmail.com
        </Typography>
        <IconButton >
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Paper >
      <ListsContainer />
    </Paper>
  );
}

export default SideBar;

