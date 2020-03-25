import React from 'react';
import List from '@material-ui/core/List';
import {
  Typography, Paper,
} from '@material-ui/core';
import { useContextValue } from '../../shared/AppContextProvider';
import { useStyles } from '../../utils/useStyles';
import Item from './list';
import AddForm from '../shared/addForm';
import newId from '../../utils/newId';


const ListsContainer = () => {
  const [{ lists, selectedList }, dispatch] = useContextValue();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: any,
  ) => {
    dispatch({ type: 'SELECT_LIST', payload: id });
  };


  const handleAdd = (title: any) => {
    dispatch({
      type: 'ADD_LIST', payload: { id: newId('l_'), title, tasks: [] },
    });
  };

  return (
    <div className="list-container">
      <Paper elevation={0} square className="header-card">
        <Typography variant="h6" color="textSecondary">Lists</Typography>
      </Paper>

      <List className="list">
        {lists.map((value: any) => (
          <Item
            value={value}
            selectId={handleListItemClick}
            selectedId={selectedList}
          />
        ))}
      </List>
      <AddForm add={handleAdd} />
    </div>
  );
};

export default ListsContainer;
