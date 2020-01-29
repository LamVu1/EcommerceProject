import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import {rootReducer} from '../reducers/root_reducer';

const middlewares = [logger];

export const configureStore = (preloadedState = {}) => (

    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
);  

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

 