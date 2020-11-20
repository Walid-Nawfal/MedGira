import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Centers } from './mcenters';
import { Comments } from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//import { FormGroup } from 'reactstrap';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            centers: Centers,
            comments: Comments,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}