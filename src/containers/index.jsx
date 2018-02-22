import React, { Component } from 'react'
import { Router } from 'react-router';
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    const { history, routes, routerKey, store } = this.props;
    return (
        <Provider store={store}>
            <div >
                <Router history={history} children={routes} key={routerKey} />
            </div>
        </Provider>
    )
  }
}