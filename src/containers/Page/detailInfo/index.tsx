import React, { useState } from 'react';
import styles from './index.scss';
import '@assets/iconfont/iconfont.css';

export default function Message(){
    const [messageName, setMessageName] = useState("用户1");
   
    return (
        <div className={ styles["container"] }>
            <div className={ styles["header"] }>
                <div className={ styles["rightIcon"] }>
                    <i className="iconfont icon-ziyuan"></i>
                    <i className="iconfont icon-zuixiaohua"></i>
                    <i className="iconfont icon-guanbi1"></i>
                </div>
                <p>{ messageName }</p>
            </div>
        </div>
    );
};