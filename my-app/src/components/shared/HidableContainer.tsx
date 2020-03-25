import React from 'react';
import { Paper, Button } from '@material-ui/core';

// eslint-disable-next-line no-unused-vars
const HidableContainer = ({ children, ...rest }: any) => {
  const [open, setOpen] = React.useState(true);


  return open ? (
    <Paper className="container" square elevation={2}>
      <Button onClick={() => setOpen(false)}>close</Button>
      {children}
    </Paper>
  ) : null;
};

export default HidableContainer;
