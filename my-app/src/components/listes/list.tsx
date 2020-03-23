import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from "../../utils/useStyles";
import ListIcon from '@material-ui/icons/List';
import { ListItemIcon, LinearProgress, Typography } from "@material-ui/core";
import { useContextValue } from "../../shared/AppContextProvider";



export default function Item(props: any) {
  const classes = useStyles();
  const [{ tasks }, dispatch] = useContextValue();

  const progress = {
    total: tasks.filter((i: any) => i.listID === props.value.id).length,
    done: tasks.filter((i: any) => i.done).filter((i: any) => i.listID === props.value.id).length,
  }
  return (
    <ListItem button
      key={props.value.id}
      onClick={event => props.selectId(event, props.value.id)}
      selected={props.selectedId === props.value.id}>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText primary={props.value.title} />
      <ListItemSecondaryAction>
        <Typography component="span" variant="body2" color="textSecondary" > {progress.done}/{progress.total}</Typography>
      </ListItemSecondaryAction>
    </ ListItem>
  );
}

