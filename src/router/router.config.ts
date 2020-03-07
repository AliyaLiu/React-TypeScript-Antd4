import { Login, HomePage, Message, Friends} from '@routers/index';
const routerConfig = [
    {
        path: '/',
        component: Login,
        exact: true
    },
    {
        path: '/homePage',
        component: HomePage,
        exact: true
    },
    {
        path: '/Message',
        component: Message,
        exact: true
    },
    {
        path: '/friendList',
        component: Friends,
        exact: true
    },
    // {
    //     path: '/mall/product/:id',
    //     component: Friends,
    //     exact: true
    // },
];
export {routerConfig};
