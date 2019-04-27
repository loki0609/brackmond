import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

import { createStore } from 'redux';
import Reducers from './reducers';
import { Provider } from 'react-redux';
const store = createStore(
    Reducers,
    {
        username: 'Ann'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <App className="container" />
    </Provider>,
    document.getElementById('root')
);