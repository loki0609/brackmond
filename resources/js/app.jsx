import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

import { createStore } from 'redux';
import Reducers from './reducers';
import { Provider } from 'react-redux';
const store = createStore(Reducers, {
    username: 'Ann'
});

render(
    <Provider store={store}>
        <App className="container" />
    </Provider>,
    document.getElementById('root')
);