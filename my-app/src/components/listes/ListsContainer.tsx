import React, { useState } from "react";

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Item from "./list";
import { useStyles } from "../../utils/useStyles";
import { useContextValue } from "../../shared/AppContextProvider";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { Grid, Input } from "@material-ui/core";
import AddForm from "../shared/addForm";
import newId from "../../utils/newId";





const ListsContainer = () => {
  const [{ lists, selectedList }, dispatch] = useContextValue();
  const classes = useStyles();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: any,
  ) => {
    dispatch({ type: 'SELECT_LIST', payload: id });
  };


  const handleAdd = (title: any) => {
    dispatch({
      type: 'ADD_LIST', payload: { id: newId('l_'), title: title, tasks: [] }
    });
  }

  return (
    <div className="list-container">
      <List className='list'>
        {lists.map((value: any) => <Item value={value} selectId={handleListItemClick} selectedId={selectedList} />)}
      </List>
      <AddForm add={handleAdd} />
    </div>
  );
}

export default ListsContainer;





