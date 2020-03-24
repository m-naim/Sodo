import React from 'react';
import Modal from '@material-ui/core/Modal';
import { Paper, Slide, Button } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from '../utils/useStyles';



export default function RigthModel() {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>

            <IconButton onClick={handleOpen}>
                <MoreVertIcon fontSize="small" />
            </IconButton>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
                hideBackdrop
                className='root-model'
            >
                <Slide in={open} direction="left" >
                    <Paper className='rigth-slider'>
                        <Button onClick={handleClose}>close</Button>
                        <h2 id="simple-modal-title">Text in a modal</h2>
                        <p id="simple-modal-description">
                            Duis mollis, est non commodo luctus,
                            nisi erat porttitor ligula.
                        </p>
                    </Paper>
                </Slide>
            </Modal>
        </React.Fragment>
    );
}