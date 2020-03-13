import React from 'react';
// import React, {FC} from 'react';
// import {connect} from 'react-redux';
// import ReduxState from '@store/type';
// import RootState from '@store/root/type';
// import {IndexType} from '@utils/type';

/*********** type demo ****************/
// const typeExample = () => {
//     //索引签名demo
//     // let obj = {};
//     // obj.prop = 1;
//     // 上述的定义是会报错的
//     let obj: IndexType<number> = {};
//     obj.prop = 1;

//     // type Action<T = string> = { //T的默认类型是string
//     //     type: T;
//     //     [p: string]: any;
//     // }
//     // let action: Action<number> = {
//     //     type: 123,
//     //     h: true
//     // };
//     // let action2: Action = {
//     //     type: '123',
//     //     h: true
//     // };
// };
// typeExample();
/***************************/
// interface Props extends Partial<RootState> { //将RootState做个映射转换成其属性全部为可选属性

// }
// interface Props extends RootState { //如果是直接继承RootState则会提示缺少RootState中其他的属性
// }
// const mapStateToProps = ({root}: ReduxState) => ({
//     isSignin: root.isSignin
// });
// const Test: FC<Props> = () => 
//     <div>
//         111
//     </div>;


// function Test() {
//     <div>
//         111
//     </div>;
// }

export default function Test(){
    return(
        <div>
            111
        </div>
    )
};
