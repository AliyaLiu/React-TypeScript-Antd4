import {AnyAction} from 'redux';
import Actions from "./actions";
import RootState from './type';

const INITIAL_STATE: RootState = {
    title: "来自redux的默认标题",
    isNormal: false,
    isSignin: false,
    successful: false,
    failed: false,
    userInfo: null
};
// interface Action {
//     type: string;
//     [propName: string]: any;
// }

// 以下是redux包中index.d.ts中的类型定义
// export interface Action<T = any> {
//   type: T
// }
// export interface AnyAction extends Action {
//   // Allows any extra properties to be defined in an action.
//   [extraProps: string]: any
// }
const root = (state: RootState = INITIAL_STATE, action: AnyAction) => {
    // console.log("state", state);
    switch (action.type) {
        case Actions.NORMAL:
            return {
                ...INITIAL_STATE,
                isNormal: true
            };
        case Actions.SINGIN:
            return {
                ...state,
                isSignin: true
            };
        case Actions.SUCCESSFUL:
            return {
                ...state,
                successful: true,
                userInfo: action.userInfo
            };
        case Actions.FAILED:
            return {
                ...state,
                isSignin: false,
                failed: true
            };
        default:
            return state;
    }
};

export default root;
