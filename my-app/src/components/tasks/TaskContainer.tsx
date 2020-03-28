import React from 'react';
import {
  Typography, List,
} from '@material-ui/core';
import Task from './task';
import { useContextValue } from '../../shared/AppContextProvider';
import AddForm from '../shared/addForm';
import newId from '../../utils/newId';
import EmptyElement from '../shared/EmptyElement';
import AlertDialog from '../shared/AlertDialog';
import ButtonOpningRightModel from '../shared/ButtonOpningRightModel';


const TaskContainer = () => {
  const [{ tasks, lists, selectedList }, dispatch] = useContextValue();

  const list = lists.find((item: any) => item.id === selectedList);
  const selectedTasks = tasks.filter((item: any) => item.listID === selectedList) || [];

  const handleAdd = (title: any) => {
    dispatch({
      type: 'ADD_TASK',
      payload: {
        listID: selectedList, id: newId('t_'), title, creation_date: new Date(), done: false,
      },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_LIST',
      payload: selectedList,
    });
  };

  return (
    list
      ? (

        <div className="task-container">
          <div className="header-card">
            <Typography variant="h3" color="primary">
              {list.title}
            </Typography>
            <div className="actoins-container">
              <AlertDialog action={handleDelete} />
              <ButtonOpningRightModel component="List settings" />
            </div>
          </div>

          <List className="list">
            {
              selectedTasks.length ? selectedTasks.map((task: any) => <Task data={task} />)
                : <EmptyElement />
            }
          </List>

          <AddForm add={handleAdd} label="Ajouter une Tâche" />

        </div>
      )
      : <div />
  );
};

export default TaskContainer;
