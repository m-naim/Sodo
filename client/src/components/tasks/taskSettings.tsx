import React from 'react';
import 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {
  TextField, Typography,
} from '@material-ui/core';
import EditableText from '../shared/EditableText';

const TaskSettings = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <div className="container-left">
      <Typography variant="h5" color="textPrimary">
        Text TItle
      </Typography>

      <EditableText initialValue="This text can be edited by the user." />

      <div>

        <Typography variant="h5" color="textPrimary">
          Echeance
        </Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

          <KeyboardDatePicker
            className="time-control"
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>

      <Typography variant="h5" color="textPrimary">
        Rappel
      </Typography>
      <Typography variant="h5" color="textPrimary">
        Note
      </Typography>

      <TextField
        id="filled-multiline-static"
        label="Ajouter une note"
        multiline
        rows="5"
        defaultValue=""
        variant="filled"
      />
    </div>
  );
};

export default TaskSettings;
