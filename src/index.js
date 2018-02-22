import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {useRouterHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import 'antd/dist/antd.css';
import './resource/scss/index.css';
import createStore from "./store/createStore"
import App from "./containers/index"
import registerServiceWorker from './registerServiceWorker';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


const browserHistory = useRouterHistory(createBrowserHistory)({
    basename: ''
})

const initialState =  window.___INITIAL_STATE__;

const store = createStore(initialState, browserHistory);

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.router
})

let render = (routerKey = null) => {
    const routes = require('./routes/index').default(store);
    ReactDOM.render(
        <App
            routerKey={routerKey}
            store={store}
            history={history}
            routes={routes}
         />, 
        document.getElementById('root')
    );
}

if (process.env.NODE_ENV !== 'production' && module.hot) {
    const renderApp = render;
    render = () => {
        try {
            renderApp(Math.random())
        } catch (error) {

        }
    };
    module.hot.accept(['./routes/index'], () => render())
}
render();
registerServiceWorker();
