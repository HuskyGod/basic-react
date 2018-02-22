export default (store) => {
    return {
        path: 'login',
        component: require('./component/app').default,
        childRoutes: [
            {
                path: 'sign-in',
                component: require('./container/signIn').default
            },
        ]
    }
}