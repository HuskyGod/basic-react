/**
 * Created by xuan on 16/7/22.
 */
import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import {makeRootReducer} from './reducers';

export default (initialState = {}, history) => {
    const middleware = [thunk, routerMiddleware(history)]

    const enhancers = []

    if (process.env.NODE_ENV !== 'production') {
        const devToolsExtension = window.devTooksExtension;
        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension());
        }
    }

    const store = createStore(
        makeRootReducer(),
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )
    )
    store.asyncReducers || (store.asyncReducers = {});

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const reducers = require('./reducers').default;
            store.replaceReducer(reducers);
        })
    }

    return store;
}