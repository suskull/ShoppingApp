import { combineReducers } from 'redux';
//localstore
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer  from './cart/cart-reducer';

//localstore
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}
//localstore rootReducer
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

//localstore
export default persistReducer(persistConfig,rootReducer);
