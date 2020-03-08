import React from 'react';
import './App.css';
import ListsContainer from './components/listes/ListsContainer';
import TaskContainer from './components/tasks/TaskContainer';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { AppContextProvider } from './shared/AppContextProvider.jsx';

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <div className="main-container">

          <div className="side-container" >
            <ListsContainer />
          </div>
          <div className="midel-container">
            <TaskContainer />
          </div>
          <div className="rigth-container">
            <TaskContainer />
          </div>

        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
