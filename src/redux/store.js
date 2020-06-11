import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//localstore
import {persistStore} from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//localstore
export const persistor = persistStore(store);


