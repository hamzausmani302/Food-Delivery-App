import { createStore , combineReducers } from "redux";

import CartReducer from '../reducers/cartReducer';

const rootReducer = combineReducers(
    {cart : CartReducer}
)

const configureStore = ()=>{
    return createStore(rootReducer);
}

export default configureStore;