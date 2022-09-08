import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const feelingRating = (state = 0, action) => {
    console.log('feelingRating reducer', action);
    return state;
}

const contentRating = (state = 0, action) => {
    console.log('contentRating reducer', action);
    return state;
}

const storeInstance = createStore(
    combineReducers(
        {
            feelingRating,
            contentRating
        }
    )

);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
