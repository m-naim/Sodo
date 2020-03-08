export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK': {
            console.log(action.payload)
        }
        case 'SELECT_LIST': {
            console.log(action)
            return {
                ...state,
                selectedList: action.payload
            }
        }
        default: {
            console.log(action)
            return state;
        }
    }
}