import { ADD_TASK, TASK_DONE, GET_TASKS, CHANGE_DATE } from '../actions/types';
  
  const initialState = {
    tasks:[{
      list: [],
      name:'',
      limite:''
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
      case CHANGE_DATE:
        return {
          ...state,
          tasks: state.tasks.map(item=>
            {
              if(item._id==action.payload.task_id){
                item.limite=action.payload.date
                console.log(item)
              }
              return item
            }
            )
        };
      default:
        return state;
    }
  };