import React, { useState } from 'react';
import {
  List, ListItem, ListItemIcon, Checkbox, ListItemText, ListSubheader, FormControl, FormControlLabel, Switch, FormLabel, FormGroup,
} from '@material-ui/core';

const displayPreferences = [
  { id: 0, title: 'Citations', storageKey: 'display-quoteBox' },
  { id: 1, title: 'on bording', storageKey: 'display-onBording' },
  { id: 2, title: 'statistiques', storageKey: 'display-statistiques' },
  { id: 3, title: 'objectifes', storageKey: 'display-objectifes' },
];

function getPreferences(prefs: any) {
  return prefs.reduce(
    (arr:boolean[], elm:any) => [...arr, (localStorage.getItem(elm.storageKey) === 'true')],
    [],
  );
}

const Preferences = () => {
  const [state, setState] = useState(getPreferences(displayPreferences));
  const [switchs, setSwitch] = useState({
    darkMode: localStorage.getItem('prefers-color-scheme')==='dark',
    sound: true
  });

  const handleCheckboxClick = (id:number, storageKey:string) => {
    const newState = state.slice();
    newState[id] = !newState[id];
    localStorage.setItem(storageKey, newState[id].toString());
    setState(newState);
  };

  const handleDarkMode=()=>{
    if(switchs.darkMode)
    localStorage.setItem('prefers-color-scheme','light');
    else
    localStorage.setItem('prefers-color-scheme','dark');

    setSwitch(prev=>{return {...prev, darkMode: !prev.darkMode}});
  }

  return (
    <div className="slider-rigth-container-centerd">
        
      <FormControl component="fieldset">
      <FormLabel component="legend">Assign responsibility</FormLabel>
      <FormGroup>
      <FormControlLabel
          control={<Switch checked={switchs.darkMode} onChange={handleDarkMode} color="primary" />}
          label="Mode nuit"
        />
        <FormControlLabel
          control={<Switch checked={true}  color="primary" />}
          label="son"
        />
      </FormGroup>
    </FormControl>
      <List
        className="list"
        subheader={(
          <ListSubheader component="div" id="nested-list-subheader">
            Affichage
          </ListSubheader>
      )}
      >
        {
            displayPreferences.map((li) => (
              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={state[li.id]}
                    onChange={() => handleCheckboxClick(li.id, li.storageKey)}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText
                  primary={li.title}
                />

              </ListItem>
            ))
        }
      </List>
    </div>
  );
};

export default Preferences;
