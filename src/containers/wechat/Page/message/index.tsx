import React,{ useState, useEffect } from 'react';
import styles from './index.scss';
// import '@assets/iconfont/iconfont.css';
import DetailInfo from '@containers/wechat/Page/detailInfo';
import MessageList from '@mock/message/消息列表.json';
import { Input } from 'antd';
const { Search } = Input;


const Message = () => {
    console.log(MessageList);
    const [checkUser, setCheckUser] = useState(MessageList[0]);

    useEffect(()=>{
        console.log(checkUser);
    })
   
    return (
        <>
            <div className={ styles["container"] }>
            <div className={ styles["search"] }>
                <Search
                    placeholder="搜索"
                    onSearch={value => console.log(value)}
                    style={{ width: 180 }}
                    />
            </div>
            <ul>
                {
                    MessageList.length && MessageList.map((item: any)=>{
                        return(
                            <li key={ item.id } onClick={ ()=>setCheckUser(item) }>
                                <img src={ item.photo } alt=""/>
                                <div>
                                        <p className={ styles['title'] }>{ item.name }</p>
                                        <p>{ item.info }</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            </div>
            <DetailInfo checkUser = { checkUser }/>
        </>
    );
}
export default Message;