import React from 'react';
import { Paper, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

// eslint-disable-next-line no-unused-vars
const HidableContainer = ({ children, ...rest }: any) => {
  const [open, setOpen] = React.useState(true);


  return open ? (
    <Paper className="container" square elevation={2}>
      <div className="card-header">
        <IconButton color="secondary" aria-label="close" onClick={() => setOpen(false)}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
      {children}
    </Paper>
  ) : null;
};

export default HidableContainer;
