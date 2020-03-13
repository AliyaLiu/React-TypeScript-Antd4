import React, { memo, useMemo, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import ItemTypes from './ItemTypes';
import '@assets/iconfont/iconfont.css';
import styles from './index.scss';

const style: React.CSSProperties = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    cursor: 'move',
    width: '3rem',
    height: '3rem',
    textAlign: 'center',
    float: 'left',
    margin: '0.5rem',
    position: "relative"
}

export interface CardProps {
    id: any,
    text: string,
    moveCard: (draggedId: string, id: string) => void,
    deleteOne: ( id: any) => void,
}

const Card: React.FC<CardProps> = memo(({ id, text, moveCard, deleteOne }) => {
    const ref = useRef(null);
    const [{ isDragging }, connectDrag] = useDrag({
        item: { id, type: ItemTypes.CARD },
        collect: (monitor: any) => {
            const result = {
                isDragging: monitor.isDragging(),
            }
            return result;
        },
    })

    const [, connectDrop] = useDrop({
        accept: ItemTypes.CARD,
        hover({ id: draggedId }: { id: string; type: string }) {
            if (draggedId !== id) {
                moveCard(draggedId, id);
            }
        },
    })
    //删除某个元素
    const delectIcon = ()=>{
        deleteOne(id);
    }

    connectDrag(ref);
    connectDrop(ref);
    const opacity = isDragging ? 0 : 1
    const containerStyle = useMemo(() => ({ ...style, opacity }), [opacity])
    return (
        <div ref={ref} style={containerStyle}>
            {text}
            <i className={`iconfont  icon-guanbi2 ${styles["iconDele"]}`} onClick={ delectIcon }></i>
        </div>
    )
})

export default Card;
