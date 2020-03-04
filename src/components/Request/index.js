import axios from "axios";
import qs from "qs";
import Middleware from "MODULES/control/middleware";

const timeout = 10000; //默认的超时时间
// const timeout = 1000; //默认的超时时间
const baseOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Requested-With": "XMLHttpRequest"
    },
    timeout,
    withCredentials: true
};
axios.interceptors.response.use(//拦截器配置
    function(response) {
        // Do something with response data
        return response;
    },
    function(error) {
        return Promise.reject(error);
    }
);

axios.defaults.withCredentials = true;

export default class Request {
    static get(url, params, config) {
        return axios({...baseOptions, method: "GET", url, params, ...config});
    }

    static post(url, data, config) {
        return axios.post({
            ...baseOptions,
            url,
            data: qs.stringify(data),
            ...config
        });
    }
}
