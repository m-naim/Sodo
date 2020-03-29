import React from 'react';
import List from '@material-ui/core/List';
import {
  ListSubheader,
} from '@material-ui/core';
import { useContextValue } from '../../shared/AppContextProvider';
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
      <List
        className="list"
        subheader={(
          // eslint-disable-next-line react/jsx-no-undef
          <ListSubheader component="div" id="nested-list-subheader">
            Lists
          </ListSubheader>
        )}
      >
        {lists.map((value: any) => (
          <Item
            value={value}
            selectId={handleListItemClick}
            selectedId={selectedList}
          />
        ))}
      </List>
      <AddForm add={handleAdd} label="Ajouter une Liste" />
    </div>
  );
};

export default ListsContainer;
