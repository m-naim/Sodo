import axios from 'axios';
import { ADD_TASK,GET_TASKS,TASK_DONE,CHANGE_DATE , Display,DISPLAY_ADD_TASK} from './types';

export const getTasks = () => dispatch => {
  axios.get('/gettoday',{ headers: { token: window.localStorage.jwt }})
  .then(res =>
      dispatch({
        type: GET_TASKS,
        payload: res.data
      })
  )
  .catch(
    err => console.log(err)
  )
};

export const addTask = obj => dispatch => {
  axios.post('/ntask', obj)
  .then(res =>
    dispatch({
      type: ADD_TASK,
      payload: res.data
      })
    )
  .catch(
    err => console.log(err)
  )
};

export const taskDone = id => dispatch => {

  axios.post(`/taskdone/${id}`)
  .then( ()=>{
      dispatch({
        type: TASK_DONE,
        payload: id
      })
    })
    .catch(
      err => console.log(err)
    )
};

export const changedate = obj => dispatch => {
  axios.post('/deadline', obj).then(()=>
    dispatch({
      type: CHANGE_DATE,
      payload: obj
    })
  );
};

export const displayList= id => dispatch => {
 
    dispatch({
      type: Display,
      payload: id
    })

};

export const displayAddTask= op => dispatch => {
 
  dispatch({
    type: DISPLAY_ADD_TASK,
    payload: op
  })

};