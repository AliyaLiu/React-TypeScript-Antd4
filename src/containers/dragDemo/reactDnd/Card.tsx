import React, { memo, useMemo, useRef } from 'react';
import { useDrag, useDrop, DragSourceMonitor , DragSource, DragPreviewImage} from 'react-dnd';
import ItemTypes from './ItemTypes';
import '@assets/iconfont/iconfont.css';
import styles from './index.scss';

export interface CardProps {
    id: any,
    text: string,
    href: string,
    icon: string,
    moveCard: (draggedId: string, id: string) => void,
    // deleteOne: ( id: any) => void,
    startdrag: boolean,
    canMove: boolean,
    operateType: string, //操作类型显示不同的样式
}

const Card: React.FC<CardProps> = memo(({ id, text, href,icon, moveCard, canMove , startdrag, operateType}) => {
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

    const [ {isOver, canDrop} , connectDrop] = useDrop({
        accept: ItemTypes.CARD,
        drop({ id: draggedId }: { id: string; type: string }) {
            if (draggedId !== id && canMove ) {
                moveCard(draggedId, id );
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    const isActive = canDrop && isOver;
    let border = '1px solid #fff';
    if (isActive && !isDragging ) {
        border = '1px dashed red';
    } 
    // else 
    // if (canDrop) {
    //     border = '1px dashed #000'
    // }

    // 是否可以跳转
    const clickJump = (event: any) => {
        console.log('我在点击图片');
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

    const clickText = () => {
        console.log('我在点击文字');
    }

    const clickWrap = () => {
        console.log('我在点击包裹层');
    }

    connectDrag(ref);
    connectDrop(ref);
    const opacity = isDragging ? 0.4 : 1;
    const backgroundColor = isDragging ? "yellowgreen" : '';
    const zIndex = startdrag ? -1 : 0;
    const cursor = isDragging ? "move" : "default";
    const containerStyle = useMemo(() => ({ opacity, cursor, }), [opacity, cursor])
    const itemStyle = useMemo(() => ({ background:`url(${icon}) center/80% 80% no-repeat`, zIndex}), [zIndex])
    const bgStyle = useMemo(() => ({ backgroundColor }), [backgroundColor])
    return (
        <div  
            ref={ref}  
            className={` ${ operateType === "up" ? styles["wrapitem"] : styles["wrapitemDown"] }  `  } 
            style={{  ...containerStyle, border, backgroundColor  }}
            onClick = { ()=>clickWrap() }
            >
            <div
                style={ itemStyle }
                className={ styles["dragitem"] }
                onClick = { (e)=>clickJump(e) }
                >
            </div>
            <div 
                className={ styles["cardName"] }
                onClick={ ()=>clickText() }
                >
                {text}{text}{text}{text}{text}{text}
            </div>
            <div className={ styles['bg'] } style={ bgStyle } ></div>
        </div>
        
    )
})

export default Card;