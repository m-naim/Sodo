import React from 'react';
import './App.css';
import TaskContainer from './components/tasks/TaskContainer';
import { AppContextProvider } from './shared/AppContextProvider.jsx';
import SideBar from './components/sideBar.jsx';
import StatesBar from './components/StatesBar';
import { Paper, Typography, Drawer } from '@material-ui/core';


function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <div className="main-container">

          <SideBar />

          <Paper className="midel-container">
            <TaskContainer />
          </Paper>

          <StatesBar />

        </div>
      </div>
    </AppContextProvider >
  );
}

export default App;
