import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStyles } from "../../utils/useStyles";



export default function Item(props: any) {
  const classes = useStyles();
  return (
    <ListItem button
      key={props.value.id}
      onClick={event => props.selectId(event, props.value.id)}
      selected={props.selectedId === props.value.id}>
      <ListItemAvatar>
        <Avatar className={classes.small}>{props.value.title[0]}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={props.value.title}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ ListItem>
  );
}

