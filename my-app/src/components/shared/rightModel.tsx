import React from 'react';
import Modal from '@material-ui/core/Modal';
import {
  Paper, Slide, IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useContextValue } from '../../shared/AppContextProvider';
import TaskSettings from '../tasks/taskSettings';


export default function RigthModel() {
  const [{ model }, dispatch] = useContextValue();


  const handleClose = () => {
    dispatch({ type: 'CLOSE_MODEL' });
  };

  return (
    <>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={model.open || false}
        onClose={handleClose}
        hideBackdrop
        className="root-model"
      >
        <Slide in={model.open} direction="left">
          <Paper className="rigth-slider">
            <div className="card-header">
              <IconButton color="secondary" aria-label="close" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
            <TaskSettings />
          </Paper>
        </Slide>
      </Modal>
    </>
  );
}
