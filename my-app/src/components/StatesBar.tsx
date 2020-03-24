import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useContextValue } from '../shared/AppContextProvider';
import StatsTable from './statsTable';
import { statsExtractor } from '../utils/statsDataUtils';
import Objectifs from './Objectifs';
import RigthModel from './rightModel';

const StatesBar = () => {
    const [{ tasks, selectedList }, dispatch] = useContextValue();


    const statsData = statsExtractor(tasks)

    return (
        <Paper className="rigth-container">
            <Paper square elevation={1}>
                <Typography align='center' variant="h4" gutterBottom>
                    welcom Naim!
              </Typography>
            </Paper>
            <Objectifs />

            <Paper>
                <Paper elevation={0} square className="header-card">
                    <Typography variant="h6" color='textSecondary'>Statistics</Typography>
                </Paper>
                <StatsTable data={statsData} />
            </Paper>


        </Paper>
    );
}

export default StatesBar;


