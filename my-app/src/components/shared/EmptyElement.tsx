import React from 'react';
import { Typography } from '@material-ui/core';

const EmptyElement = () => (

  <div className="container">
    <img src="https://opendoodles.s3-us-west-1.amazonaws.com/clumsy.svg" alt="no tasks" width="200" />
    <Typography color="primary">
      There is no element in this liste... you can create some!
    </Typography>
  </div>
);

export default EmptyElement;
