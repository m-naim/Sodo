import React from 'react';
import {
  IconButton, Menu, MenuItem,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router-dom';
import { authentification } from '../utils/authentification';
import { useContextValue } from '../shared/AppContextProvider';


export default function UserMenu() {
  const [state] = useContextValue();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.setItem(`${authentification.session.username}-state`, JSON.stringify(state));
    authentification.signout();
    history.push('/login');
  };

  return (
    <div>

      <IconButton onClick={handleClick}>
        <MoreVertIcon fontSize="small" aria-controls="simple-menu" aria-haspopup="true" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
