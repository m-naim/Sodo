import {
  ADD_TASK,
  TASK_DONE,
  GET_TASKS,
  CHANGE_DATE,
  Display,
  DISPLAY_ADD_TASK
} from '../actions/types';

const initialState = {
  tasks: [{
    list: [],
    name: '',
    limite: ''
  }],
  selectedList: {
    id: '',
    name: ''
  },
  displayAddModal: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    case TASK_DONE:
      return {
        ...state,
        tasks: state.tasks.filter(item => item._id !== action.payload)
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case CHANGE_DATE:
      return {
        ...state,
        tasks: state.tasks.map(item => {
          if (item._id === action.payload.task_id) {
            item.limite = action.payload.date
          }
          return item
        })
      };
    case Display:
      return {
        ...state, selectedList: {
          id: action.payload.id,
          name: action.payload.name,
        }
      }
      case DISPLAY_ADD_TASK:
        return {
          ...state, displayAddModal: action.payload
        }
        default:
          return state;
  }
};