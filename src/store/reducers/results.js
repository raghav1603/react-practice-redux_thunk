import * as actionTypes from '../actions/actionType';
import { updateObject } from '../utility';
const initialState = {
    result: []
}

const deleteResult = (state, action) => {
    const newArray = state.result.filter(result => result.id !== action.eleID)
    return updateObject(state, { result: newArray })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // change data here , like if you want to manipulate the result
        case actionTypes.STORE_RESULT:
            // return { ...state, result: state.result.concat({ id: new Date(), val: action.result }) } // we dont use push here cause then we will be pushing the original state and that is not advisable
            // break;
            return updateObject(state, { result: state.result.concat({ id: new Date(), val: action.result }) })
        case actionTypes.DELETE_RESULT:
            // const id=2;
            // const newArray=[...state.result]  // this is best when you want to remove entire object from the array and not just the value
            // newArray.splice(id,1)
            // better way is to use filter as it returns a new array entirely
            // const newArray=state.result.filter( result => result.id !== action.eleID)
            // return {
            //     ...state,
            //     result:newArray
            // }
            return deleteResult(state, action);
        default:
            return state
        // break;
    }
    // return state
}

export default reducer