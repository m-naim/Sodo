import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useContextValue } from '../shared/AppContextProvider';
import StatsTable from './statsTable';
import statsExtractor from '../utils/statsDataUtils';
import Objectifs from './Objectifs';
import HidableContainer from './shared/HidableContainer';

const StatesBar = () => {
  const [{ tasks }] = useContextValue();
  const statsData = statsExtractor(tasks);

  const session = JSON.parse(localStorage.getItem('session') || '{}');

  return (
    <Paper className="rigth-container">
      <HidableContainer>
        <img src="https://opendoodles.s3-us-west-1.amazonaws.com/zombieing.svg" alt="no tasks" width="200" />
        <Typography align="center" variant="h4" gutterBottom>
          welcom
          {' '}
          {session.username}
          !
        </Typography>

        <Typography variant="body1" gutterBottom>
          create your first liste

        </Typography>
        <Typography variant="body1" gutterBottom>
          create your first tasks
        </Typography>
        <Typography variant="body1" gutterBottom>
          create your first objectif
        </Typography>
      </HidableContainer>

      <Objectifs />

      <Paper>
        <Paper elevation={0} square className="header-card">
          <Typography variant="h6" color="textSecondary">Statistics</Typography>
        </Paper>
        <StatsTable data={statsData} />
      </Paper>


    </Paper>
  );
};

export default StatesBar;
