import React from 'react';
import TaskContainer from './tasks/TaskContainer';
import SideBar from './sideBar.jsx';
import StatesBar from './statistics/StatesBar';
import RigthModel from './shared/rightModel';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <SideBar />
        <TaskContainer />
        <StatesBar />
        <RigthModel />
      </div>
    </div>
  );
}

export default App;
