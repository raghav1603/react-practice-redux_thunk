import * as actionTypes from '../actions/actionType';
import { updateObject } from '../utility'
const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            // return { ...state, counter: state.counter + 1  }             //this was to be used without the utility.js , not this function is hadled by that file to make the code look leaner
            // const newstate= Object.assign({},state);
            // newstate.counter=state.counter+1;
            // return newstate
            return updateObject(state, { counter: state.counter + 1 })
        // break;
        case actionTypes.DECREMENT:
            // return { ...state, counter: state.counter - 1 }
            return updateObject(state, { counter: state.counter - 1 })
        // break;
        case actionTypes.ADD:
            // return { ...state, counter: state.counter + action.value }
            return updateObject(state, { counter: state.counter + action.value })
        // break;
        case actionTypes.SUB:
            return updateObject(state, { counter: state.counter - action.value })
        // break;
        case actionTypes.RESET:
            // return { ...state, counter: 0 }
            return updateObject(state, { counter: 0 })
        // break;

        default:
            return state
        // break;
    }
    // return state
}

export default reducer