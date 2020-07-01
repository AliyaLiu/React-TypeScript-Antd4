import React, { memo, useMemo, useRef } from 'react';
import { useDrag, useDrop, DragSourceMonitor} from 'react-dnd';
import ChildItem from './childItem';
// import ItemTypes from './ItemTypes';
import '@assets/iconfont/iconfont.css';
import styles from './index.scss';

export interface CardProps {
    item:any,
    clickWrap:Function,
    // id: any,
    // text: string,
    // icon: string,
    // moveCard: (draggedId: string, id: string) => void,
    // startdrag: boolean,
    // canMove: boolean,
    // operateType: string, //操作类型显示不同的样式
}

const CardItem: React.FC<CardProps> = memo(({ item }) => {
    // const CardItem: React.FC<CardProps> = memo(({ id, text,icon, moveCard, canMove , startdrag, operateType}) => {
    const { id, text } = item;
    const ref = useRef(null);

    const [{ isDragging }, connectDrag] = useDrag({
        item: { id, type: ChildItem.Item },
        // canDrag: startdrag && canMove ? true : false,
        collect: (monitor: DragSourceMonitor) => {
            const result = {
                isDragging: monitor.isDragging(),
            }
            return result;
        },
    })

    const [ {isOver, canDrop} , connectDrop] = useDrop({
        accept: ChildItem.Item,
        drop({ id: draggedId }: { id: string; type: string }) {
            if (draggedId !== id  ) {
                console.log('ID，text，子节点在移动')
                // moveCard(draggedId, id );
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    // const isActive = canDrop && isOver;
    // let border = '1px solid #fff';
    // if (isActive && !isDragging ) {
    //     border = '1px dashed red';
    // } 
    // else 
    // if (canDrop) {
    //     border = '1px dashed #000'
    // }


    const clickText = () => {
        console.log('我在点击文字');
    }

    const clickWrap = () => {
        console.log('我在点击包裹层');
    }

    return (
        <span  
            ref={ref} 
            className={styles["wrapItem"]} 
            >
            { item.text }
        </span>
        
    )
})

export default CardItem;