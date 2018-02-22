
import App from '../component/index';
import NoMatch from '../component/noMatch';

const createRoutes = (store) => ({
    path: '/',
    component: App,
    indexRoute: { onEnter: (nextState, replace) => replace('/project') },
    childRoutes: [
        require("../module/project/router/index").default(store),
        require("../module/login/routers").default(store),
        {
            path: '*',
            component: NoMatch
        }
    ],
    onEnter: (nextState) => {
        console.log(nextState)
    }
});
export default createRoutes;