import { ADD_TASK, TASK_DONE, GET_TASKS } from '../actions/types';
  
  const initialState = {
    tasks:[{
      list: [],
      name:''
    }]
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_TASKS:
        return {
          ...state,
          tasks: action.payload,
        };
      case TASK_DONE:
        return {
          ...state,
          tasks: state.tasks.filter(item => item._id !== action.payload)
        };
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks,action.payload]
        };

      default:
        return state;
    }
  };