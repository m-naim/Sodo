import { ADD_TASK, TASK_DONE, GET_TASKS, CHANGE_DATE, Display, DISPLAY_ADD_TASK} from '../actions/types';
  
  const initialState = {
    tasks:[{
      list: [],
      name:'',
      limite:''
    }],
    selectedList:'',
    displayAddModal: false
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_TASKS:
        console.log(action.payload)
        return {
          ...state,
          tasks: action.payload,
          selectedList: (action.payload && action.payload.length)?action.payload[0].list[0]:""
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
              if(item._id===action.payload.task_id){
                item.limite=action.payload.date
              }
              return item
            }
            )
        };
        case Display:
          return  {
            ...state, selectedList:action.payload
          }
        case DISPLAY_ADD_TASK:
          return{
            ...state, displayAddModal:action.payload
          }
      default:
        return state;
    }
  };