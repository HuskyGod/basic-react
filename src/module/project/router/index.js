import requireAuth from "../../../util/requireAuth"

export default (store) => {
    return {
        path: 'project',
        component: require('../component/app').default,
        indexRoute: { onEnter: (nextState, replace) => replace('/demo1') },
        onEnter: requireAuth(store),
        childRoutes: [
            require('./demo1/routers.js').default(store),
        ]
    }
}