import React, { useState } from "react";
import Task from "./task";
import { useStyles } from "../../utils/useStyles";
import { useContextValue } from "../../shared/AppContextProvider";
import { Divider, Paper, Typography, List, ListItem, IconButton, TextField, ListItemText, ListItemSecondaryAction, Input } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined'
import AddForm from "../shared/addForm";
import newId from "../../utils/newId";


const TaskContainer = (props: any) => {
  const [{ tasks, lists, selectedList }, dispatch] = useContextValue();

  const list = lists.find((item: any) => item.id === selectedList);
  const selectedTasks = tasks.filter((item: any) => item.listID === selectedList) || [];

  const classes = useStyles();

  const handleAdd = (title: any) => {
    dispatch({
      type: 'ADD_TASK',
      payload: { listID: selectedList, id: newId('t_'), title: title, creation_date: new Date(), done: false }
    })
  }

  const handleDelete = (title: any) => {
    dispatch({
      type: 'DELETE_LIST',
      payload: selectedList
    })
  }

  console.log(list);

  return (
    list ?
      <Paper square className="task-container">
        <Paper square className="header-card">
          <Typography variant="h5" color='primary' >
            {list.title}
          </Typography>
          <div className='actoins-container'>
            <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton >
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </div>
        </Paper>
        <List className='list'>
          {
            selectedTasks.length ? selectedTasks.map((task: any) => <Task data={task} />) :
              <div>no truc</div>
          }
        </List>

        <AddForm add={handleAdd} />

      </Paper>
      : <div></div>
  );
}

export default TaskContainer;