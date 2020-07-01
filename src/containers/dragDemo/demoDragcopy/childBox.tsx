import React, { useState, useCallback, useMemo,useRef } from 'react'
import { useDrag, DragSourceMonitor,useDrop } from 'react-dnd'
import { Colors } from './Colors'
import { DragItem } from './interfaces'
import styles from './index.scss';


const style: React.CSSProperties = {
  border: '1px dashed gray',
  padding: '2px',
  margin: '10px',
}

export interface CHildBoxProps {
  key:any,
  card:any,
  updateDtagItem:Function;
}

export const CHildBox: React.FC<CHildBoxProps> = ({ children,card,updateDtagItem }) => {
  const [forbidDrag, setForbidDrag] = useState(false)
  const ref = useRef(null);
  const [{ isDragging }, connectDrag] = useDrag({
    item: { card,type: Colors.ITEM },
    begin(monitor){
      console.log('card11111',card);
      updateDtagItem(card);
    },
    canDrag: !forbidDrag,
    collect: (monitor: DragSourceMonitor) => {
      const result = {
          isDragging: monitor.isDragging(),
      }
      return result;
    },
  })

  const [{ isOver, canDrop }, connectDrop] = useDrop({
    accept: [Colors.ITEM],
    drop({ card: draggedItem }: { card: any; type: string }) {
      console.log('hover',card,'draggedItem',draggedItem);
      // console.log('draggedItem',draggedItem);
    },
    hover(item, monitor){
      // console.log('hover',item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  connectDrag(ref);
  connectDrop(ref);

  return (
    <div 
      ref={ref} 
      className={ styles["wrapItem"] } 
      >
      <small>{card.name}</small>
    </div>
  )
}
