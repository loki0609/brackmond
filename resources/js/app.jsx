import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

import { createStore } from 'redux';
import Reducers from './reducers';
import { Provider } from 'react-redux';
import Axios from 'axios';

import { setState } from './actions';

/**
 * This initialState must be kept in sync (as far as keys/types go) with what's
 * returned from GET /state
 *
 * NOTE: things should not be null that can be populated later by an input.
 * i.e., I tried setting initialState.username = null, and it gave all sorts of
 * warnings/errors about controlled inputs, etc.  It needed a value, even if
 * empty string.
 */
let initialState = {
    username: '',
    loggedIn: false,
    clients: [],
    workers: [],
    jobs: [],
};

const store = createStore(
    Reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



Axios
    .get('/state')
    .then((r) => {
        store.dispatch(setState(r.data));
    })
    .catch((error) => { console.error(error); });


render(
    <Provider store={store}>
        <App className="container" />
    </Provider>,
    document.getElementById('root')
);
