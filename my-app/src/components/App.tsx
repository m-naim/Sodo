import React from 'react';
import TaskContainer from './tasks/TaskContainer';
import SideBar from './sideBar.jsx';
import StatesBar from './StatesBar';
import { Paper } from '@material-ui/core';

function App() {
  return (

    <div className="App">
      <div className="main-container">

        <SideBar />

        <Paper className="midel-container">
          <TaskContainer />
        </Paper>

        <StatesBar />

      </div>
    </div>
  );
}

export default App;
