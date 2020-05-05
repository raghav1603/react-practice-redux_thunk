import * as actionTypes from './actionType';
const initialState = {
    counter: 0,
    result: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, counter: state.counter + 1 }
        // break;
        case actionTypes.DECREMENT:
            return { ...state, counter: state.counter - 1 }
        // break;
        case actionTypes.ADD:
            return { ...state, counter: state.counter + action.value }
        // break;
        case actionTypes.SUB:
            return { ...state, counter: state.counter - action.value }
        // break;
        case actionTypes.STORE_RESULT:
            return { ...state, result: state.result.concat({ id: new Date(), val: state.counter }) } // we dont use push here cause then we will be pushing the original state and that is not advisable
        // break;
        case actionTypes.DELETE_RESULT:
            // const id=2;
            // const newArray=[...state.result]  // this is best when you want to remove entire object from the array and not just the value
            // newArray.splice(id,1)
            // better way is to use filter as it returns a new array entirely
            const newArray=state.result.filter( result => result.id !== action.eleID)
            return {
                ...state,
                result:newArray
            }
        case actionTypes.RESET:
            return { ...state, counter: 0 }
        // break;

        default:
            return state
        // break;
    }
    // return state
}

export default reducer