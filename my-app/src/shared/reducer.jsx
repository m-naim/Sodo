

export const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGLE_DONE':
            return {
                ...state,
                tasks: toggleDone(state.tasks, action.payload)
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }

        case 'SELECT_LIST': {
            console.log(action)
            return {
                ...state,
                selectedList: action.payload
            }
        }
        case 'ADD_LIST':
            return {
                ...state,
                lists: [...state.lists, action.payload]
            }

        case 'DELETE_LIST':

            return {
                ...state,
                lists: state.lists.filter((item) => item.id !== action.payload),
                tasks: state.tasks.filter((item) => item.listID !== action.payload),
                selectedList: ''
            }

        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((item) => item.id !== action.payload),
            }

        case 'UPDATE':
            return action.payload

        case 'OPEN_MODEL':
            return {
                ...state,
                model: { ...state.model, open: true }
            }
        case 'CLOSE_MODEL':
            return {
                ...state,
                model: { ...state.model, open: false }
            }

        default: {
            console.log("unknwn action", action)
            return state;
        }
    }
}


const toggleDone = (tasks, payload) => {
    const tasksIndex = tasks.findIndex((Item => Item.id == payload));
    tasks[tasksIndex].done = !tasks[tasksIndex].done;
    tasks[tasksIndex].done_date = new Date();
    return tasks;
}