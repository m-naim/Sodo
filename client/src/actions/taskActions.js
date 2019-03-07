import axios from 'axios';
import { ADD_TASK,GET_TASKS,TASK_DONE,CHANGE_DATE } from './types';

export const getTasks = () => dispatch => {
  axios.get('/gettoday',{ headers: { token: window.localStorage.jwt }}).then(res =>
      dispatch({
        type: GET_TASKS,
        payload: res.data
      })
  );
};

export const addTask = obj => dispatch => {
  axios.post('/ntask', obj).then(res =>
    dispatch({
      type: ADD_TASK,
      payload: res.data
    })
  );
};

export const taskDone = id => dispatch => {

  axios.post(`/taskdone/${id}`).then(res=>{
    dispatch({
      type: TASK_DONE,
      payload: id
    })
  }
  );
};

export const changedate = obj => dispatch => {
  axios.post('/deadline', obj).then(()=>
    dispatch({
      type: CHANGE_DATE,
      payload: obj
    })
  );
};