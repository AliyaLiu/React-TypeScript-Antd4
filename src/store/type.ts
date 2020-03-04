// import RootState from './root/type';
import reducers from './reducers';
type ReduxState = ReturnType<typeof reducers>;
export default ReduxState;
// export default interface ReduxState {
//     root: RootState;
// }
