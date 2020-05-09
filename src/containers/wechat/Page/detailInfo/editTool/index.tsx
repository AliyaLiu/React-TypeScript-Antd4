import React, { useState } from 'react';
import styles from './index.scss';
import '@assets/iconfont/iconfont.css';
// import { emojify } from 'react-emojione';
import { Input } from 'antd';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const { TextArea } = Input;

const EditTool = () => {
    const [ chatInput, setChatInput ] = useState('');
    const [ showEmoji, setShowEmoji ] = useState(false);

    const showEmojiClick = () => {
        setShowEmoji(!showEmoji);
    }

    const checkEmoji = (emoji) => {
        console.log('emoji',emoji);
        // setChatInput(chatInput+emoji.native)

    }

    const entryValue = (e) => {
        window.console.log('onchange事件',e.target.value)
    }
    return (
        <div className={ styles["container"] }>
            <div className={ styles["top"] }>
                <i className="iconfont icon-smile" onClick={ showEmojiClick }></i>
                {/* <i className="iconfont icon-wenjian2"></i> */}
                <input type="file" name="filename" id="filename" hidden/>
                <label htmlFor="filename" className="iconfont icon-wenjian2"></label>
                <i className="iconfont icon-jietu_huaban"></i>
            </div>
            {
                showEmoji ?
                <div className={ styles["emojiWrap"] }>
                    <Picker set='apple' onClick={ checkEmoji }/>
                </div>
                : null
            }
            
            {/* { emojify(':wink: :D ^__^ :angry:sweat:', {output: 'unicode'}) } */}
            <div className={`${styles["bottomInput"]} bottomInput`  }>
                <TextArea 
                    rows={8}
                    // value={ chatInput }
                    onChange={ entryValue }
                    />
            </div>
        </div>
    );
}
export default EditTool;