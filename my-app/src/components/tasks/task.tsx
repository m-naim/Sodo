import React, { useState } from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import { useContextValue } from "../../shared/AppContextProvider";
import RigthModel from "../shared/rightModel";
import ButtonOpningRightModel from "../shared/ButtonOpningRightModel";

function Task(props: any) {

  const [state, dispatch] = useContextValue();

  const handleDelete = (title: any) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: props.data.id
    })
  }

  return (
    <ListItem divider key={props.data.id} button onClick={() => dispatch({ type: 'TOGLE_DONE', payload: props.data.id })}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={props.data.done}
          disableRipple
          inputProps={{ 'aria-labelledby': props.data.id }}
        />
      </ListItemIcon>
      <ListItemText
        primary={props.data.title}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
        </IconButton>
        <ButtonOpningRightModel />
      </ListItemSecondaryAction>

    </ListItem>
  );
}

export default Task;




