import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import { useContextValue } from '../../shared/AppContextProvider';
import ButtonOpningRightModel from '../shared/ButtonOpningRightModel';


function Task({ data, beep }: any) {
  const [, dispatch] = useContextValue();
  const handleDelete = () => {
    dispatch({
      type: 'DELETE_TASK',
      payload: data.id,
    });
  };

  const handleClick = () => {
    dispatch({ type: 'TOGLE_DONE', payload: data.id });
    if (data.done) {
      // eslint-disable-next-line no-param-reassign
      beep.currentTime = 0;
      beep.play();
    }
  };

  return (
    <ListItem divider key={data.id} button onClick={handleClick}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={data.done}
          disableRipple
          inputProps={{ 'aria-labelledby': data.id }}
        />
      </ListItemIcon>
      <ListItemText
        primary={data.title}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
        </IconButton>
        <ButtonOpningRightModel component="TASK_SETTINGS" />
      </ListItemSecondaryAction>

    </ListItem>
  );
}

export default Task;
