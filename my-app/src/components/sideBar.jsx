import React from 'react';
import { Paper } from '@material-ui/core';
import ListsContainer from './listes/ListsContainer';
import UserPanel from './userPanel.tsx';


function SideBar() {
  return (
    <Paper elevation={3} square className="side-container">
      <UserPanel />
      <ListsContainer />
    </Paper>
  );
}

export default SideBar;
