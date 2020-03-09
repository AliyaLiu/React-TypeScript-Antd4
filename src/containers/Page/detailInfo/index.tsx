import React from 'react';
import styles from './index.scss';
import '@assets/iconfont/iconfont.css';
import DetailInfo from '@mock/message/消息内容.json';

const DetaiInfo = (props: any) => {
    const { checkUser } = props;
    // const [messageName, setMessageName] = useState("用户1");
   
    return (
        <div className={ styles["container"] }>
            <div className={ styles["header"] }>
                <div className={ styles["rightIcon"] }>
                    <i className="iconfont icon-ziyuan"></i>
                    <i className="iconfont icon-zuixiaohua"></i>
                    <i className="iconfont icon-guanbi1"></i>
                </div>
                <p>{ checkUser.name }</p>
            </div>
            <div className={ styles["chatList"] }>
                111
            </div>
        </div>
    );
}
export default DetaiInfo;