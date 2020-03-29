import React from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {
  Paper, TextField, InputLabel, InputAdornment,
  IconButton, Button, FormControl, FilledInput, Typography, Tooltip,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import authentification from '../utils/authentification';
import { useContextValue } from '../shared/AppContextProvider';
import initialState from '../shared/initialState';
import WavesAnimation from './Waves/WavesAnimation';


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
  const [, dispatch] = useContextValue();

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const HandleConection = async () => {
    const user = { username: values.userName, password: values.password };
    const authSuccess = await authentification.authetificate(user);
    if (authSuccess) {
      dispatch({ type: 'UPDATE', payload: getStoredState(values.userName) });
      history.push('/');
    }
  };

  return (
    <Paper className="login-container">
      <div className="login-card">
        <form noValidate className="login-form" onSubmit={HandleConection}>
          <Typography color="primary" variant="h5">Ha, Salut!</Typography>
          <Typography variant="h6">Connecte Toi et Amuse toi bien</Typography>
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
          <Button className="form-control" variant="contained" onClick={HandleConection} color="secondary">Se connecter</Button>
          <div className="box">
            <Typography variant="body2" color="textSecondary">tu n&lsquo;a pas de compte?</Typography>
            <Tooltip title="Pas besion! connecte toi et le compte se creéra automatiquement...">
              <IconButton aria-label="delete">
                <InfoIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </div>
        </form>

        {/* <div className="login-form">
          <Typography variant="h6">Ou</Typography>

          <Button
            className="form-control"
            variant="contained"
            onClick={HandleConection}
          >
            Se connecter avec Google
          </Button>
          <Button
            className="form-control"
            variant="contained"
            onClick={HandleConection}
          >
            Se connecter avec Facebook
          </Button>
        </div> */}

      </div>
      <WavesAnimation />
    </Paper>
  );
};

export default Login;
