import { SET_USERNAME, SET_STATE } from './actions';

/**
 * App State
 */
export default (previousState = {}, action) => {
    let newState = {};
    switch (action.type) {
        case SET_USERNAME:
            newState = {
                ...previousState, ...{ username: action.name }
            }
            break;

        case SET_STATE:
            newState = action.newState;
            break;

        default:
            newState = { ...previousState };
            break;
    }
    return newState;
}