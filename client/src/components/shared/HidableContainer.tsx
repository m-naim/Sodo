import React from 'react';
import {
  IconButton, Typography, Checkbox, Slide, Container, Paper,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


// eslint-disable-next-line no-unused-vars
const HidableContainer = ({
  children, className, header, openStatus = true,
  storageKey = 'default',
}: any) => {
  const key = `display-${storageKey}`;
  const [close, setClose] = React.useState((localStorage.getItem(key) === 'true'));
  const [checked, setChecked] = React.useState((localStorage.getItem(key) === 'true'));

  const handleCheckboxToggle = () => {
    setChecked(!checked);
    if (storageKey) localStorage.setItem(key, (!checked).toString());
  };

  return (close) ? null : (
    <Slide direction="right" in={openStatus} mountOnEnter unmountOnExit>
      <Paper square variant='outlined' className={className}>
        {(header) || (
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
            <CloseIcon />
          </IconButton>

        </div>
        )}
        {children}
      </Paper >
    </Slide>
  );
};

export default HidableContainer;
