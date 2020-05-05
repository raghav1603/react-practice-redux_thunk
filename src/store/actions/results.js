import * as actionTypes from './actionType'

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}
export const storeResult = (res) => {
    return dispatch => {                    //this is possible cause of thunk other wise the below commented way was to be used
        setTimeout(() => {
            dispatch(saveResult(res))
        }, 2000);
    }
    // return {
    //     type: STORE_RESULT,
    //     result: res
    // }

}
export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        eleID: resElId
    };
}
