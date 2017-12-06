import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import * as reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducers.rootReducer);
window.store = store;

ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
