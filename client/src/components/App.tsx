import React from 'react';
import TaskContainer from './tasks/TaskContainer';
import SideBar from './sideBar.jsx';
import StatesBar from './statistics/StatesBar';
import SliderModel from './slider/SliderModel';
import { ThemeProvider,  createMuiTheme, PaletteType } from '@material-ui/core';

function App() {
  const prefersDarkMode:  PaletteType   = localStorage.getItem('prefers-color-scheme')==='dark'?'dark' : 'light';

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ,
        },
      }),
    [prefersDarkMode],
  );
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      <div className="main-container">
        <SideBar />

        <TaskContainer />
        <StatesBar />
        <SliderModel />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
