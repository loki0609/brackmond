/**
 * Action Types
 */
export const SET_USERNAME = 'SET_USERNAME';



/**
 * Action Creators
 */
export function setUsername(name) {
    return {
        type: SET_USERNAME,
        name: name,
    };
}