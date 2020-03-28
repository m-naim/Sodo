import React from 'react';
import Modal from '@material-ui/core/Modal';
import {
  Paper, Slide, IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useContextValue } from '../../shared/AppContextProvider';
import TaskSettings from '../tasks/taskSettings';
import inverseDirection from '../../utils/inverseDirection';
import Preferences from './Preferences';
import MonCompte from './MonCompte';


export default function SliderModel() {
  const [{ model }, dispatch] = useContextValue();


  const handleClose = () => {
    dispatch({ type: 'CLOSE_MODEL' });
  };

  const selectComponent = () => {
    switch (model.component) {
      case 'TASK_SETTINGS':
        return <TaskSettings />;
      case 'Preferences':
        return <Preferences />;
      case 'Mon compte':
        return <MonCompte />;

      default:
        return <Preferences />;
    }
  };
  return (
    <>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={model.open || false}
        onClose={handleClose}
        hideBackdrop
        className={`${model.position}-model`}
      >
        <Slide in={model.open} direction={inverseDirection(model.position)}>
          <Paper elevation={3} className="slider">
            <div className="header-card">
              <IconButton color="secondary" aria-label="close" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
            {
              selectComponent()
            }

          </Paper>
        </Slide>
      </Modal>
    </>
  );
}
