import React from 'react';
import { Typography } from '@material-ui/core';
import HidableContainer from '../shared/HidableContainer';


const OnBording = () => {
  const session = JSON.parse(localStorage.getItem('session') || '{}');
  return (
    <HidableContainer>
      <img src="https://opendoodles.s3-us-west-1.amazonaws.com/zombieing.svg" alt="no tasks" width="200" />
      <Typography variant="h4" gutterBottom>
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
  );
};

export default OnBording;
