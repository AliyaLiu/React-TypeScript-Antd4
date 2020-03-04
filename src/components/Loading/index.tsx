//react-router切换中间过渡动画组件
import React, {FC} from "react";
import {LoadingComponentProps} from 'react-loadable';
import styles from "./index.scss";
import { Spin } from 'antd';

const Loading: FC<LoadingComponentProps> = (mes) => {
    if (mes.error) {
        console.error(mes.error);
        return <span>报错了</span>;
    }
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                {/* <div className={styles.boxLoading} /> */}
                <Spin size="large" />
                <div className={styles.title}>努力加载中...</div>
            </div>
        </div>
    );
};
export default Loading;
