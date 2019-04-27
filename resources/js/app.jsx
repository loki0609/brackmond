import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

import { createStore } from 'redux';
import Reducers from './reducers';
import { Provider } from 'react-redux';
const store = createStore(
    Reducers,
    {
        username: 'Ann',
        loggedIn: true,
        clients: [
            {
                id: 2,
                name: 'Emma',
            },
            {
                id: 3,
                name: 'Jackson',
            }
        ],
        workers: [
            {
                id: 5,
                name: 'Maggie',
            }
        ],
        jobs: [
            {
                clientId: 2,
                workerId: 5,
                task: 'Brush Teeth',
                status: 'unstarted',
            },
            {
                clientId: 3,
                workerId: 5,
                task: 'Mow Jackson\'s Lawn',
                status: 'finished',
            }
        ],
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <App className="container" />
    </Provider>,
    document.getElementById('root')
);