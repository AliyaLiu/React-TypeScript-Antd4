import { Login} from '@routers/index';
// import {Home, Mall, ProductDetail, TSDemo} from '@routers/index';
const routerConfig = [
    {
        path: '/',
        component: Login,
        exact: true
    },
    // {
    //     path: '/mall',
    //     component: Mall,
    //     exact: true
    // },
    // {
    //     path: '/tsdemo',
    //     component: TSDemo,
    //     exact: true
    // },
    // {
    //     path: '/mall/product/:id',
    //     component: ProductDetail,
    //     exact: true
    // },
];
export {routerConfig};
