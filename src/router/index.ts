import Loadable from "react-loadable";
import Loading from '@components/Loading';
const timeout = 1000;
//文件按需加载批处理
// export const Home=Loading;

// 登录页
export const Login = Loadable({
    loader: () => import("@containers/login"),
    loading: Loading,
    timeout: timeout
});

export const Home = Loadable({
    loader: () => import("@containers/Home"),
    loading: Loading,
    timeout: timeout
});
export const Mall = Loadable({
    loader: () => import("@containers/Mall"),
    loading: Loading,
    timeout: timeout
});
export const ProductDetail = Loadable({
    loader: () => import("@containers/Mall/ProductDetail"),
    loading: Loading,
    timeout: timeout
});
export const UserCenter = Loadable({
    loader: () => import("@containers/UserCenter"),
    loading: Loading,
    timeout: timeout
});
export const Report = Loadable({
    loader: () => import("@containers/UserCenter/Report"),
    loading: Loading,
    timeout: timeout
});
export const Transcript = Loadable({
    loader: () => import("@containers/UserCenter/Transcript"),
    loading: Loading,
    timeout: timeout
});
export const TSDemo = Loadable({
    loader: () => import("@containers/TSDemo"),
    loading: Loading,
    timeout: timeout
});
