import axios from 'axios';
import { ADD_TASK,GET_LISTS, ADD_LIST, DELETE_LIST, LISTS_LOADING,TASK_DONE } from './types';

export const getLists = () => dispatch => {
  dispatch(setListsLoading());
  axios.get('/lists',{ headers: { token: window.localStorage.jwt }}).then(res =>
      dispatch({
        type: GET_LISTS,
        payload: res.data
      })
  );
};

export const addList = item => dispatch => {
  axios.post('/addlist', item).then(res =>
    dispatch({
      type: ADD_LIST,
      payload: res.data
    })
  );
};

export const deleteList = id => dispatch => {
  axios.post(`/dellist/${id}`).then(res =>
    dispatch({
      type: DELETE_LIST,
      payload: id
    })
  );
};

export const setListsLoading = () => {
  return {
    type: LISTS_LOADING
  };
};

export const addTask = obj => dispatch => {
  axios.post('/addtask', obj).then(res =>
    dispatch({
      type: ADD_TASK,
      payload: res.data
    })
  );
};

export const taskDone = obj => dispatch => {

  axios.post('/taskdone', obj).then(res=>{
    dispatch({
      type: TASK_DONE,
      payload: res.data
    })
  }
  );
};