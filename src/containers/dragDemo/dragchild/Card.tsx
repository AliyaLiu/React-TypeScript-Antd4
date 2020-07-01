import React, { memo, useMemo, useRef } from 'react';
import { useDrag, useDrop, DragSourceMonitor} from 'react-dnd';
import ItemTypes from './ItemTypes';
import '@assets/iconfont/iconfont.css';
import styles from './index.scss';

import CardItem from './item';

export interface CardProps {
    id: any,
    text: string,
    icon: string,
    moveCard: (draggedId: string, id: string) => void,
    startdrag: boolean,
    canMove: boolean,
    operateType: string, //操作类型显示不同的样式
    card:any,
}

const Card: React.FC<CardProps> = memo(({ card,moveCard }) => {
    const { id, text,child } = card;
    const ref = useRef(null);

    const [{ isDragging }, connectDrag] = useDrag({
        item: { id, type: ItemTypes.CARD },
        begin:(monitor)=>{
            console.log('monitor',monitor);
        },
        // canDrag: startdrag && canMove ? true : false,
        collect: (monitor: DragSourceMonitor) => {
            const result = {
                isDragging: monitor.isDragging(),
            }
            // console.log(monitor);
            return result;
        },
    })

    const [ {isOver, canDrop} , connectDrop] = useDrop({
        accept: ItemTypes.CARD,
        drop({ id: draggedId }: { id: string; type: string }) {
            if (draggedId !== id ) {
                moveCard(draggedId, id );
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

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
    // const zIndex = startdrag ? -1 : 0;
    const cursor = isDragging ? "move" : "default";
    const containerStyle = useMemo(() => ({ opacity, cursor, }), [opacity, cursor])
    // const itemStyle = useMemo(() => ({ background:`url(${icon}) center/80% 80% no-repeat`, zIndex}), [zIndex])
    const bgStyle = useMemo(() => ({ backgroundColor }), [backgroundColor])
    return (
        <div  
            ref={ref}  
            className={styles["wrapCard"]}
            // className={` ${ operateType === "up" ? styles["wrapitem"] : styles["wrapitemDown"] }  `  } 
            style={{  ...containerStyle, backgroundColor  }}
            onClick = { ()=>clickWrap() }
            >
                <p>{text}</p>
                {
                    child&&child.map((item)=>{
                        return(
                            <CardItem clickWrap={()=>clickWrap()} key={item.id} item={item}/>
                        )
                    })
                }
                
        </div>
        
    )
})

export default Card;