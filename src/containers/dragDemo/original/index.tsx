import React, { useState } from 'react';
import './index.css';



function OriginalType(){
    const [list, setList] = useState([1,2,3,4,5,6,7,8,9]);
    const [inElement, setInElement] = useState(false);
    const [isDrag, setIsDrag] = useState(false);
    const [moveDom, setMoveDom] = useState(0);

    console.log('listlistlistlist',list);

    function dragEnter( ){
        // onMouseEnter事件在鼠标指针移动到元素上时触发
        // 类似于onmouseover，唯一的区别是onmouseenter不支持冒泡
        // console.log("onMouseEnter","鼠标当前所在元素","鼠标当前所在的元素内容",item);
        if( !inElement ){
            setInElement(true);
        }
    }

    function dragOver( item: number, e: any ){
        // onMouseOver鼠标指针移动到指定的元素上时发生
        // console.log("onMouseOver","鼠标在元素上移动-未按下鼠标即进行的移动","移动的元素的内容",item, "isDrag", isDrag);
        e.preventDefault();
        if( inElement && isDrag  ){
            // console.log("onMouseOver","移动", item, "isDrag", isDrag,"moveDom", moveDom);
            let newList = list;
            if( newList.indexOf(moveDom) !== newList.indexOf(item) ){
                // console.log('第1步',newList)
                if( newList.indexOf(moveDom) > newList.indexOf(item)  ){
                    newList.splice( newList.indexOf(moveDom),1 );
                    newList.splice( newList.indexOf(item),0, moveDom );
                }else if( newList.indexOf(moveDom) < newList.indexOf(item)  ){
                    newList.splice( newList.indexOf(moveDom),1 );
                    newList.splice( newList.indexOf(item)+1,0, moveDom );
                    // console.log('第2步',newList);
                }
                setList(newList);
            }
        }
    }

    function dragDown( item: number ){
        if( inElement && !isDrag ){
            // console.log("onMouseDown","在可拖拽元素上且按下了鼠标");
            setIsDrag(true);
            setMoveDom(item);
        }
    }

    function dragUp( ){
        // console.log("onMouseUp","鼠标在元素上按下-在元素上移开","移开时的元素内容",item, "isDrag", isDrag);
        if( isDrag ){
            setIsDrag(false);
            setMoveDom(0);
        }
    }

   /*  function dragMove( item: number ){
        console.log("onMouseMove","鼠标在元素上移动-未按下鼠标即进行的移动","移动的元素的内容",item);
    }

    function dragOut(){
        // onMouseOut在鼠标指针移出元素的时候触发
        // console.log("onMouseOut","鼠标当前所在元素的移动&&按下");
        setIsDrag(false);
        setMoveDom(0);
    }
 */
    function dragLeave(){
        // onMouseLeave在鼠标移出元素的时候触发，通常与onMouseenter一起使用，在鼠标移动到元素上时触发；
        // onMouseLeave事件类似于onmouseout事件，唯一的区别是onMouseLeave事件不支持冒泡；
        // console.log("onMouseLeave","鼠标当前所在元素的移动&&按下");
        setIsDrag(false);
        setMoveDom(0);
    }


    return(
        <div className="moveConteng">
            <ul 
                onMouseLeave = { ()=>dragLeave() }
            >
                {
                    list.length !== 0 && list.map(( item )=>{
                        return(
                            <li 
                                // style = { movePlace[index] } 
                                // className={ moveDom === item && isDrag ? "dragMove" : "" }
                                key = {item}
                                onMouseEnter = { ()=>dragEnter() }
                                onMouseOver = { ( e )=>dragOver(item, e) }
                                onMouseDown = { ()=>dragDown(item) }
                                onMouseUp = { ()=>dragUp() }
                                // onMouseMove={ ()=>dragMove(item) }
                                // onMouseOut = { ()=>dragOut(item) }
                                // onMouseLeave = { ()=>dragLeave(item) }
                                // draggable="true"
                                >
                                { item }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default OriginalType;