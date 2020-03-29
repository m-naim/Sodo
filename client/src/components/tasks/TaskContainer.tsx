import React from 'react';
import {
  Typography, List, IconButton,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Task from './task';
import { useContextValue } from '../../shared/AppContextProvider';
import AddForm from '../shared/addForm';
import newId from '../../utils/newId';
import EmptyElement from '../shared/EmptyElement';
import AlertDialog from '../shared/AlertDialog';
// import ButtonOpningRightModel from '../shared/ButtonOpningRightModel';
import HidableContainer from '../shared/HidableContainer';


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

  const handleClose = () => {
    dispatch({
      type: 'SELECT_LIST',
      payload: null,
    });
  };

  return (
    <HidableContainer
      className="task-container"
      header={(
        <div className="header-card">
          <IconButton className="close-btn" color="secondary" aria-label="close" onClick={handleClose}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" color="primary">
            {list ? list.title : '' }
          </Typography>
          <div className="space-filler" />
          <div className="actoins-container">
            <AlertDialog action={handleDelete} />
            {/* <ButtonOpningRightModel component="List settings" /> */}
          </div>
        </div>
        )}
      openStatus={Boolean(selectedList)}
    >


      <List className="list">
        {
              selectedTasks.length ? selectedTasks.map((task: any) => <Task data={task} />)
                : <EmptyElement />
            }
      </List>

      <AddForm add={handleAdd} label="Ajouter une Tâche" />

    </HidableContainer>
  );
};

export default TaskContainer;
