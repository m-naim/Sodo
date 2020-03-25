import React from 'react';
import Modal from '@material-ui/core/Modal';
import { Paper, Slide, Button } from '@material-ui/core';
import { useContextValue } from '../../shared/AppContextProvider';


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
            <Button onClick={handleClose}>close</Button>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
              Duis mollis, est non commodo luctus,
              nisi erat porttitor ligula.
            </p>
          </Paper>
        </Slide>
      </Modal>
    </>
  );
}
