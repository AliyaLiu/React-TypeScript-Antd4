import { Login, HomePage, Message, Friends, DragPage} from '@routers/index';
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
    {
        path: '/dragPage',
        component: DragPage,
        exact: true
    },
    // {
    //     path: '/mall/product/:id',
    //     component: Friends,
    //     exact: true
    // },
];
export {routerConfig};
