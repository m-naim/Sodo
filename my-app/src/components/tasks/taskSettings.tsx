import React from 'react';
import 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {
  TextField,
} from '@material-ui/core';

const TaskSettings = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <div className="container">
      <h2 id="simple-modal-title">Text TItle</h2>
      <h2 id="simple-modal-title">Echeance</h2>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>

        <KeyboardDatePicker
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
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </MuiPickersUtilsProvider>

      <h2 id="simple-modal-title">Rappel</h2>
      <h2 id="simple-modal-title">Note</h2>
      <TextField
        id="filled-multiline-static"
        label="Multiline"
        multiline
        rows="4"
        defaultValue="Default Value"
        variant="filled"
      />
    </div>
  );
};

export default TaskSettings;
