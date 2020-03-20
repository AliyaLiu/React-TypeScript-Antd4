import React, { memo, useMemo, useRef } from 'react';
import { useDrag, useDrop, DragSourceMonitor } from 'react-dnd';
import ItemTypes from './ItemTypes';
import '@assets/iconfont/iconfont.css';
import styles from './index.scss';

export interface CardProps {
    id: any,
    text: string,
    href: string,
    moveCard: (draggedId: string, id: string) => void,
    deleteOne: ( id: any) => void,
    startdrag: boolean,
    canMove: boolean,
}

const Card: React.FC<CardProps> = memo(({ id, text, href, moveCard, canMove,deleteOne , startdrag}) => {
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
        hover({ id: draggedId }: { id: string; type: string }) {
            if (draggedId !== id && canMove ) {
                moveCard(draggedId, id );
            }
        },
    })

    //删除某个元素
    const delectIcon = ()=>{
        deleteOne(id);
    }

    // 是否可以跳转
    const clickJump = (event: any) => {
        if( startdrag ){
            let e = event || window.event;
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        }
    }

    connectDrag(ref);
    connectDrop(ref);
    const opacity = isDragging ? 0 : 1;
    const cursor = isDragging ? "move" : "default";
    const containerStyle = useMemo(() => ({ background:'url("https://static.leke.cn/images/home/photo.png") center/80% 80% no-repeat', opacity, cursor }), [opacity, cursor])
    return (
        <a ref={ref} 
            className={ styles["dragitem"] } 
            style={ containerStyle }
            href={ href }
            onClick = { (e)=>clickJump(e) }
            target="_blank"
            rel="noopener noreferrer"
            >
            {text}
            {
                startdrag && canMove ? <i className={`iconfont  icon-guanbi2 ${styles["iconDele"]}`} onClick={ delectIcon }></i> : ''
            }
        </a>
    )
})

export default Card;
