import React, { Component } from 'react';
import { useStyles } from '../utils/useStyles';
import { Paper } from '@material-ui/core';

import ListsContainer from './listes/ListsContainer'
import UserPanel from './userPanel.tsx';


function SideBar() {
  const classes = useStyles();

  return (
    <Paper elevation={3} square className="side-container" >
      <UserPanel />
      <ListsContainer />
    </Paper>
  );
}

export default SideBar;

