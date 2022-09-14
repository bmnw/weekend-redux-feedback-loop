import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingRating = (state = '', action) => {
    console.log('feelingRating reducer', action);
    if (action.type === 'update_feeling'){
        return action.payload;
    } else if(action.type === 'clear_rating'){
        return '';
    }
    return state;
} // end feelingRating

const contentRating = (state = '', action) => {
    console.log('contentRating reducer', action);
    if (action.type === 'update_content'){
        return action.payload;
    } else if(action.type === 'clear_rating'){
        return '';
    }
    return state;
} // end contentRating

const supportRating = (state = '', action) => {
    console.log('supportRating reducer', action);
    if (action.type === 'update_support'){
        return action.payload;
    } else if(action.type === 'clear_rating'){
        return '';
    }
    return state;
} // end supportRating

const comments = (state = '', action) => {
    console.log('comments reducer', action);
    if(action.type === 'update_comments'){
        return action.payload;
    } else if(action.type === 'clear_rating'){
        return '';
    }
    return state;
} // end comments

const storeInstance = createStore(
    combineReducers(
        {
            feelingRating,
            contentRating,
            supportRating,
            comments
        }
    ),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
