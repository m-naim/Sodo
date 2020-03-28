import React from 'react';
import {
  Typography, List, ListItem, ListItemIcon, Checkbox, ListItemText,
} from '@material-ui/core';
import HidableContainer from '../shared/HidableContainer';

const checkLists = [
  {
    id: 1,
    title: 'crée une liste',
    done: false,
  },
  {
    id: 2,
    title: 'crée une Tâche',
    done: false,
  },
  {
    id: 3,
    title: 'crée une Objectif',
    done: false,
  },
  {
    id: 3,
    title: 'gérer tes Preferences',
    done: false,
  },
];
const OnBording = () => {
  const session = JSON.parse(localStorage.getItem('session') || '{}');
  return (
    <HidableContainer storageKey='onBording'>
      <img src="https://opendoodles.s3-us-west-1.amazonaws.com/zombieing.svg" alt="no tasks" width="200" />
      <Typography color="secondary" variant="h4" gutterBottom>
        Bienvenu
        {' '}
        {session.username}
        !
      </Typography>

      <Typography variant="h6" gutterBottom>
        Voici une liste de choses à faire pour t&lsquo;habituer à l&lsquo;application
      </Typography>
      <List className="list">
        {checkLists.map((value: any) => (
          <ListItem key={value.id}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={value.done}
                disableRipple
                inputProps={{ 'aria-labelledby': value.id }}
              />
            </ListItemIcon>
            <ListItemText
              secondary={value.title}
            />
          </ListItem>
        ))}
      </List>
    </HidableContainer>
  );
};

export default OnBording;
