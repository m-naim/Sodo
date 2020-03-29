import React from 'react';
import TaskContainer from './tasks/TaskContainer';
import SideBar from './sideBar.jsx';
import StatesBar from './statistics/StatesBar';
import SliderModel from './slider/SliderModel';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <SideBar />

        <TaskContainer />
        <StatesBar />
        <SliderModel />
      </div>
    </div>
  );
}

export default App;
