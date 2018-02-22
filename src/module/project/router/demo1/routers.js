import { injectReducer } from '../../../../store/reducers'

export default (store) => {
    return {
        path: '/demo1',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                injectReducer(store, {key: 'demo1', reducer: require('./reduces/index').default});
                cb(null, require('./component/app').default)
            })
        },
        indexRoute: { onEnter: (nextState, replace) => replace('/demo1/list') },
        childRoutes: [
            {
                path: 'list',
                component: require('./container/list').default
            },
        ]
    }
}