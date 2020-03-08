import React, { useState } from "react";

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Item from "./list";
import { useStyles } from "../../utils/useStyles";
import { useContextValue } from "../../shared/AppContextProvider";



const ListsContainer = () => {
  const [{ lists, selectedList }, dispatch] = useContextValue();
  const classes = useStyles();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: any,
  ) => {
    console.log("click", id);

    dispatch({ type: 'SELECT_LIST', payload: id });
  };

  return (
    <div className="list-container">
      <div className="header-card">
        <h2>Listes</h2>
        <List className={classes.list}>
          {lists.map((value: any) => <Item value={value} selectId={handleListItemClick} selectedId={selectedList} />)}
        </List>
        <Button variant="contained" color="primary">Ajouter Une Liste</Button>
      </div>
      <div className="card-bottom-add" />
    </div >
  );
}

export default ListsContainer;





