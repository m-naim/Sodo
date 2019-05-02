import axios from 'axios';
import { GET_LISTS, ADD_LIST, DELETE_LIST, LISTS_LOADING } from './types';

export const getLists = () => dispatch => {
  dispatch(setListsLoading());
  axios.get('/lists',{ headers: { token: window.localStorage.jwt }})
  .then(res =>
      dispatch({
        type: GET_LISTS,
        payload: res.data
      })
  )
  .catch(
    err => console.log(err)
  )
};

export const addList = item => dispatch => {
  axios.post('/addlist', item)
  .then(res =>
    dispatch({
      type: ADD_LIST,
      payload: res.data
      })
    )
  .catch(
    err => console.log(err)
  )
};

export const deleteList = id => dispatch => {
  axios.post(`/dellist/${id}`)
  .then(() =>
    dispatch({
      type: DELETE_LIST,
      payload: id
    })
  )
  .catch(
    err => console.log(err)
  )
};

export const setListsLoading = () => {
  return {
    type: LISTS_LOADING
  };
};
