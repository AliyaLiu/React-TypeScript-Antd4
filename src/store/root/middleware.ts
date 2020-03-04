//处理异步的中间件
import {Dispatch} from "redux";
import Actions from "./actions";
import ReduxState from '@store/type';
import {UserInfo} from './type';

type GetNormal = ReturnType<typeof Actions.getNormal>;
type GetSignin = ReturnType<typeof Actions.getSignin>;
type Successful = ReturnType<typeof Actions.successful>;
type Failed = ReturnType<typeof Actions.failed>;
type GetState = () => ReduxState;

export default class Middleware {
    // Signin Functions Starts
    static setNormal() {
        return (dispatch: Dispatch<GetNormal>) => {
            dispatch(Actions.getNormal());
        };
    }

    static signin(userInfo: UserInfo) {
        return (dispatch: Dispatch<GetSignin>, getState: GetState) => {
            dispatch(Actions.getSignin());
            console.log("查看state", getState());
            Middleware.signinWithCredentials(dispatch, userInfo);
        };
    }

    static signinWithCredentials(
        dispatch: Dispatch<Successful | GetSignin | Failed>,
        userInfo: UserInfo
    ) {
        //模拟一个请求的过程
        const luckeyNum = 0.5;
        const timerNum = 1500;
        let timer = setTimeout(() => {
            clearTimeout(timer);
            const luckey = Math.random();
            if (luckey < luckeyNum) {
                dispatch(Actions.successful(userInfo));
                return;
            }
            dispatch(Actions.failed());
        }, timerNum);
    }
}
