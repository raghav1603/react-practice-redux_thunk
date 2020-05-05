import * as actionTypes from '../actions/actionType';
const initialState = {
    counter: 0
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