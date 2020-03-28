import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { useContextValue } from '../../shared/AppContextProvider';

const ButtonOpningRightModel = ({ component }:any) => {
  const [, dispatch] = useContextValue();
  const handleOpen = () => {
    dispatch({ type: 'OPEN_MODEL', payload: { position: 'right', component } });
  };

  return (
    <IconButton color="primary" onClick={handleOpen}>
      <MoreVertIcon fontSize="small" />
    </IconButton>
  );
};

export default ButtonOpningRightModel;
