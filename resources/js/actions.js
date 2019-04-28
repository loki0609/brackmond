/**
 * Action Types
 */
export const SET_USERNAME = 'SET_USERNAME';
export const SET_STATE = 'SET_STATE';



/**
 * Action Creators
 */
export function setUsername(name) {
    return {
        type: SET_USERNAME,
        name: name,
    };
}

export function setState(newState) {
    return {
        type: SET_STATE,
        newState: newState,
    };
}