/**
 * Created by xuan on 16/7/22.
 */
import { combineReducers } from 'redux';
import {routerReducer as router} from 'react-router-redux';

export const makeRootReducer = (asyncReducers = {}) => {
    return combineReducers(Object.assign({router}, asyncReducers))
}

export const injectReducer = (store, {key, reducer}) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer;