import React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';

const HidableContainer = ({ children, ...rest }: any) => {
    const [open, setOpen] = React.useState(true);


    return open ? (
        <Paper className='container' square elevation={3}>
            <Button onClick={() => setOpen(false)} >close</Button>
            {children}
        </Paper>
    ) : null;
}

export default HidableContainer;