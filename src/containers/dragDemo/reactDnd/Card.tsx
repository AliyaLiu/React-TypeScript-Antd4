import React, { memo, useMemo, useRef } from 'react';
import { useDrag, useDrop, DragSourceMonitor , DragSource, DragPreviewImage} from 'react-dnd';
import ItemTypes from './ItemTypes';
import '@assets/iconfont/iconfont.css';
import styles from './index.scss';

export interface CardProps {
    id: any,
    text: string,
    href: string,
    moveCard: (draggedId: string, id: string) => void,
    // deleteOne: ( id: any) => void,
    startdrag: boolean,
    canMove: boolean,
    operateType: string, //操作类型显示不同的样式
}

const Card: React.FC<CardProps> = memo(({ id, text, href, moveCard, canMove , startdrag, operateType}) => {
    // const Card: React.FC<CardProps> = memo(({ id, text, href, moveCard, canMove,deleteOne , startdrag}) => {
    const ref = useRef(null);

    const [{ isDragging }, connectDrag] = useDrag({
        item: { id, type: ItemTypes.CARD },
        canDrag: startdrag && canMove ? true : false,
        collect: (monitor: DragSourceMonitor) => {
            const result = {
                isDragging: monitor.isDragging(),
            }
            return result;
        },
    })

    const [, connectDrop] = useDrop({
        accept: ItemTypes.CARD,
        drop({ id: draggedId }: { id: string; type: string }) {
            if (draggedId !== id && canMove ) {
                moveCard(draggedId, id );
            }
        },
    })

    //删除某个元素
    // const delectIcon = ()=>{
    //     deleteOne(id);
    // }

    // 是否可以跳转
    const clickJump = (event: any) => {
        if( startdrag ){
            let e = event || window.event;
            event.cancelBubble = true;
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        }else{
            window.open(href);
        }
    }

    connectDrag(ref);
    connectDrop(ref);
    const opacity = isDragging ? 0 : 1;
    const zIndex = startdrag ? -1 : 0;
    const cursor = isDragging ? "default" : "default";
    const containerStyle = useMemo(() => ({ opacity, cursor }), [opacity, cursor])
    const itemStyle = useMemo(() => ({ background:'url("https://static.leke.cn/images/home/photo.png") center/80% 80% no-repeat', zIndex}), [zIndex])
    return (
        <div  
            ref={ref}  
            className={` ${ operateType === "up" ? styles["wrapitem"] : styles["wrapitemDown"] }  `  } 
            style={ containerStyle } >
            <div
                style={ itemStyle }
                className={ styles["dragitem"] }
                onClick = { (e)=>clickJump(e) }
                >
                {
                    // startdrag && canMove ? <i className={`iconfont  icon-guanbi2 ${styles["iconDele"]}`} onClick={ delectIcon }></i> : ''
                }
            </div>
            {/* <div className={ styles["cardName"] }>{ text }{text}{text}</div> */}
            { text }{text}{text}
        </div>
        
    )
})

export default Card;