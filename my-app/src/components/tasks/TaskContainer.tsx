import React, { useState } from "react";
import Task from "./task";
import { useStyles } from "../../utils/useStyles";
import { useContextValue } from "../../shared/AppContextProvider";
import { Divider, Paper, Typography, List, ListItem, IconButton, TextField, ListItemText, ListItemSecondaryAction, Input } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined'
import AddForm from "../shared/addForm";
import newId from "../../utils/newId";
import EmptyElement from "../shared/EmptyElement";
import AlertDialog from "../shared/AlertDialog";
import RigthModel from "../shared/rightModel";
import ButtonOpningRightModel from "../shared/ButtonOpningRightModel";


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

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_LIST',
      payload: selectedList
    })
  }

  console.log(list);

  return (
    list ?
      <div className="task-container">
        <div className="header-card">
          <Typography variant="h5" color='primary' >
            {list.title}
          </Typography>
          <div className='actoins-container'>
            <AlertDialog action={handleDelete} />
            <ButtonOpningRightModel />
          </div>
        </div>

        <List className='list'>
          {
            selectedTasks.length ? selectedTasks.map((task: any) => <Task data={task} />) :
              <EmptyElement />
          }
        </List>

        <AddForm add={handleAdd} />

      </div>
      : <div></div>
  );
}

export default TaskContainer;