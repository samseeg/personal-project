import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import {HashRouter} from 'react-router-dom';
import store from './store.js';

ReactDOM.render(
    <HashRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </HashRouter>,
    document.getElementById('root')
);
unregister();
