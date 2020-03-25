import React from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {
  Paper, Divider, TextField, InputLabel, InputAdornment,
  IconButton, Button, FormControl, FilledInput,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { authentification } from '../utils/authentification';
import { useContextValue } from '../shared/AppContextProvider';
import { initialState } from '../shared/initialState';

interface State {
    password: string;
    userName: string;
    showPassword: boolean;
}

const NotFound = JSON.stringify({ notFound: true });
function getStoredState(from: string) {
  const obj = JSON.parse(localStorage.getItem(`${from}-state`) || NotFound);
  if (obj.notFound) return initialState;
  return obj;
}

const Login = () => {
  const [values, setValues] = React.useState<State>({
    password: '',
    userName: '',
    showPassword: false,
  });
  const history = useHistory();
  const [dispatch] = useContextValue();

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const HandleConection = () => {
    authentification.authetificate({ username: values.userName });
    dispatch({ type: 'UPDATE', payload: getStoredState(values.userName) });
    history.push('/');
  };

  return (
    <Paper className="login-container">
      <Paper className="login-card">
        <form noValidate className="login-form" onSubmit={HandleConection}>
          <TextField
            className="form-control"
            id="filled-basic"
            label="Username"
            variant="filled"
            value={values.userName}
            onChange={handleChange('userName')}
          />

          <FormControl className="form-control" variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )}

            />
          </FormControl>
          <Button className="form-control" variant="contained" onClick={HandleConection}>Se connecter</Button>
        </form>

        <Divider />
        <div className="login-form">
          <Button className="form-control" variant="contained" onClick={HandleConection}>Se connecter avec Google</Button>
          <Button className="form-control" variant="contained" onClick={HandleConection}>Se connecter avec Facebook</Button>
        </div>

      </Paper>
    </Paper>
  );
};

export default Login;
