import { SET_USERNAME } from './actions';

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

        default:
            newState = { ...previousState };
            break;
    }
    return newState;
}