import { GET_LISTS, ADD_LIST, DELETE_LIST, LISTS_LOADING, ADD_TASK, TASK_DONE } from '../actions/types';
  
  const initialState = {
    lists:[{
      name: '',
      tasks:[
        {

        }
      ]
    }
    ],
    
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_LISTS:
        return {
          ...state,
          lists: action.payload,
          loading: false
        };
      case DELETE_LIST:
        return {
          ...state,
          lists: state.lists.filter(item => item._id !== action.payload)
        };
      case ADD_LIST:
        return {
          ...state,
          lists: [...state.lists,action.payload]
        };
        case ADD_TASK:
        return {
          ...state,
          lists: action.payload
          
        };
        case TASK_DONE:
        return {
          ...state,
          lists: action.payload
        };
      case LISTS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  };


