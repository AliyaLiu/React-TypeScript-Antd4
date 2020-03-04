import thunk from "redux-thunk"; // redux 作异步处理方案
import {createStore, compose, applyMiddleware} from "redux"; // 引入redux createStore、中间件及compose
import reducer from "./reducers"; // 引入reducers集合
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configStore() {
    // 创建一个中间件集合
    const middleware = [thunk];
    //创建store
    const store = createStore(
        reducer,
        {
            // root: initialState
        },
        composeEnhancers(applyMiddleware(...middleware))
    );
    if (module.hot) {
        module.hot.accept("./reducers.ts", () =>store.replaceReducer(require("./reducers.ts").default));
    }

    return store;
}
