import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';
import { Provider } from 'react-redux';
import Store from './reducers/store.jsx';

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById('root')
)