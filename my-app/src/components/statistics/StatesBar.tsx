import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useContextValue } from '../../shared/AppContextProvider';
import StatsTable from './statsTable';
import statsExtractor from '../../utils/statsDataUtils';
import Objectifs from './Objectifs';
import OnBording from './OnBording';

const StatesBar = () => {
  const [{ tasks }] = useContextValue();
  const statsData = statsExtractor(tasks);


  return (
    <Paper className="rigth-container">
      <OnBording />

      <Objectifs />

      <Paper className="container">
        <Paper elevation={0} square className="header-card">
          <Typography variant="h6" color="textSecondary">Statistics</Typography>
        </Paper>
        <StatsTable data={statsData} />
      </Paper>


    </Paper>
  );
};

export default StatesBar;
