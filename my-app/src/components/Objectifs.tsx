import React from 'react';
import {
  Paper, Typography, LinearProgress, IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

const Objectifs = () => (
  <Paper>
    <Paper elevation={0} square className="header-card">
      <Typography variant="h6" color="textSecondary">objectives</Typography>
      <IconButton edge="end" aria-label="delete">
        <AddCircleOutlinedIcon fontSize="small" color="primary" />
      </IconButton>
    </Paper>

    <Paper className="objectif-item">
      <Typography variant="body1" color="textPrimary"> Tasks peer day</Typography>
      <LinearProgress className="objectif-progess" variant="determinate" value={0} />
      <Typography variant="body1" color="textPrimary">0/1</Typography>
      <IconButton edge="end" aria-label="delete">
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Paper>

  </Paper>
);

export default Objectifs;
