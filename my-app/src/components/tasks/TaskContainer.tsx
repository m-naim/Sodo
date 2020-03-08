import React, { useState } from "react";
import Task from "./task";
import Button from '@material-ui/core/Button';
import { List } from "@material-ui/core";
import { useStyles } from "../../utils/useStyles";
import { useContextValue } from "../../shared/AppContextProvider";


const TaskContainer = (props: any) => {
  const [{ tasks, selectedList }, dispatch] = useContextValue();

  let selectedTasks = tasks.find((task: any) => task.listId === selectedList)

  console.log(selectedTasks);

  const classes = useStyles();

  return (
    <div className="task-container">
      <div className="header-card">
        <h1>Title</h1>
      </div>
      <List className={classes.list}>
        {
          selectedTasks ? selectedTasks.payload.map((task: any) => <Task data={task} />) :
            <div>no truc</div>

        }
      </List>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: 'ADD_TASK', payload: { title: 'holoo' } })}>
        Ajouter Une Liste</Button>
    </div>
  );
}

export default TaskContainer;