import { combineReducers } from 'redux';
//localstore
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer  from './cart/cart-reducer';
//import rootReducer from './shop/shop-reducer';
import directoryReducer from './directory/directory-reducer';
import shopReducer from './shop/shop-reducer';
//localstore
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}
//localstore rootReducer
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})

//localstore
export default persistReducer(persistConfig,rootReducer);
