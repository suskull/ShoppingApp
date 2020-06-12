import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//localstore
import {persistStore} from 'redux-persist';

import rootReducer from './root-reducer';
// 
//const middlewares = [logger];

const middlewares = []

//optimizing product build, if there no changes in node_modules , there will no update, so building is faster
if(process.env.NODE_ENV==='development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//localstore
export const persistor = persistStore(store);


