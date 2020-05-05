const redux = require('redux');
const createStore = redux.createStore;

const initialState = {  // this can also be a  number like const initialState=1
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => { //state =initialstate is giving it a default value is state is undefined
    if (action.type == 'INC_COUNTER') {
        //NEVER MUTATE ANY DATA FIRST COPY THEN MUTATE, 
        // ALL ACTIONS MUST BE IMMUTABLE
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type == 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    return state
}

// Store
const store = createStore(rootReducer);
console.log('[Store]', store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
})

// Dispatching Action
// keyword type to be used here mandatorys
store.dispatch({ type: 'INC_COUNTER' })
store.dispatch({ type: 'ADD_COUNTER', value: 10 })
console.log("[Dispatch]", store.getState());

