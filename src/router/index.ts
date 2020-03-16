import Loadable from "react-loadable";
import Loading from '@components/Loading';
const timeout = 100;
//文件按需加载批处理
// export const Home=Loading;

// 登录页
export const Login = Loadable({
    loader: () => import("@containers/wechat/login"),
    loading: Loading,
    timeout: timeout
});
// 首页
export const HomePage = Loadable({
    loader: () => import("@containers/wechat/Page"),
    loading: Loading,
    timeout: timeout
});
//消息页
export const Message = Loadable({
    loader: () => import("@containers/wechat/Page/message"),
    loading: Loading,
    timeout: timeout
});
//好友页
export const Friends = Loadable({
    loader: () => import("@containers/wechat/Page/friends"),
    loading: Loading,
    timeout: timeout
});
//拖拽
export const DragPage = Loadable({
    loader: () => import("@containers/dragDemo"),
    loading: Loading,
    timeout: timeout
})

//进制转换
export const BaseTransform = Loadable({
    loader: () => import("@containers/allDemo/baseTransform"),
    loading: Loading,
    timeout: timeout
})
// export const TSDemo = Loadable({
//     loader: () => import("@containers/other/TSDemo"),
//     loading: Loading,
//     timeout: timeout
// });
// export const ProductDetail = Loadable({
//     loader: () => import("@containers/Mall/ProductDetail"),
//     loading: Loading,
//     timeout: timeout
// });
// export const UserCenter = Loadable({
//     loader: () => import("@containers/UserCenter"),
//     loading: Loading,
//     timeout: timeout
// });
// export const Report = Loadable({
//     loader: () => import("@containers/UserCenter/Report"),
//     loading: Loading,
//     timeout: timeout
// });
// export const Transcript = Loadable({
//     loader: () => import("@containers/UserCenter/Transcript"),
//     loading: Loading,
//     timeout: timeout
// });

