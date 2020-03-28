import React from 'react';
import {
  Paper, IconButton, Typography, Checkbox,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

// eslint-disable-next-line no-unused-vars
const HidableContainer = ({ children,storageKey='default' , ...rest }: any) => {
  const key= `display-${storageKey}`
  const [close, setClose] = React.useState((localStorage.getItem(key)=='true'));
  const [checked, setChecked] = React.useState((localStorage.getItem(key)=='true'));

  const handleCheckboxToggle = () => {
    setChecked(!checked);
    localStorage.setItem(key, (!checked).toString());
  };

  return close ? null : (
    <Paper className="container" square elevation={2}>
      <div className="header-card">
        <div className="horizontal-item">
          <Checkbox
            size="small"
            checked={checked}
            onChange={handleCheckboxToggle}
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
          <Typography variant="body2" color="textSecondary">
            Ne plus afficher
          </Typography>
        </div>
        <div className="space-filler" />
        <IconButton className="close-btn" color="secondary" aria-label="close" onClick={() => setClose(true)}>
          <CloseIcon fontSize="small" />
        </IconButton>

      </div>
      {children}
    </Paper>
  );
};

export default HidableContainer;
