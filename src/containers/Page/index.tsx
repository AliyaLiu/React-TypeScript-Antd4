import React,{ useState } from 'react';
import styles from './index.scss';
import '@assets/iconfont/iconfont.css';
import Message from '@containers/Page/message';
import FriendList from '@containers/Page/friends';

export default function HomePage(){
    const [type,setType] = useState("message");

    return (
        <div className={ styles["container"] }>
            <div className={ styles["leftContent"] }>
                <ul className={ styles["leftTab"] }>
                    <li>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583473321675&di=e412cc66eb0f71bb47faa3e839556107&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F94o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fwh%3D450%2C600%2Fsign%3D7f6634240d46f21fc9615657c3144756%2Fb219ebc4b74543a92a8a801319178a82b801145f.jpg" alt=""/>
                    </li>
                    <li className={ type === "message" ? styles["checked"]: '' } onClick={ ()=>setType("message") }>
                        <i className="iconfont  icon-xiaoxi"></i>
                    </li>
                    <li className={ type === "friendList" ? styles["checked"]: '' } onClick={ ()=>setType("friendList") }>
                        <i className="iconfont  icon-linkman-contacts_ico"></i>
                    </li>
                </ul>
            </div>
            {
                type === "message" ? <Message/> : type === "friendList" ? <FriendList/> : ''
            }
        </div>
    );
};