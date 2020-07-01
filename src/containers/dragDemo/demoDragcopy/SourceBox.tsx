import React, { useState, useCallback, useMemo,useRef } from 'react'
import { useDrag, DragSourceMonitor,useDrop } from 'react-dnd'
import { Colors } from './Colors'
import styles from './index.scss';
import { CHildWrapbox } from './childWrapBox';
const style: React.CSSProperties = {
  border: '1px dashed gray',
  padding: '2px',
  margin: '10px',
}

export interface SourceBoxProps {
  onToggleForbidDrag?: () => void,
  item:any,
  type:string,
  moveCard: (item:any,draggedItem:any,parentindex:number) => void,
  moveChildCard: (item:any,draggedItem:any,parentindex:number) => void,
  parentindex:number,
}

export const SourceBox: React.FC<SourceBoxProps> = ({ item,type,moveCard,parentindex,moveChildCard }) => {
  const ref = useRef(null);
  const [{ isDragging }, connectDrag] = useDrag({
    item: { item,type: Colors.CARD },
    collect: (monitor: DragSourceMonitor) => {
      const result = {
          isDragging: monitor.isDragging(),
      }
      return result;
    },
  })

  const [{ isOver, canDrop }, connectDrop] = useDrop({
    accept: [Colors.CARD],
    drop({ item: draggedItem }: { item: any; type: string }) {
      if ( JSON.stringify(item)!==JSON.stringify(draggedItem)&&(item.hasOwnProperty("child")===draggedItem.hasOwnProperty("child") )) {
        moveCard(item,draggedItem,parentindex);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const containerStyle = useMemo(
    () => ({
      ...style,
      opacity: isDragging ? 0.4 : 1,
      backgroundColor:"#fff",
    }),
    [isDragging],
  )

  connectDrag(ref);
  connectDrop(ref);

  return (
    <div 
      ref={ref} 
      style={containerStyle}
      className={` ${ type==="parent" ? styles["wrapCard"] : styles["wrapItem"] }  `  } 
      >
      {
        type==="parent"&&<input type="text" name=""/>
      }
      <small>{item.name}</small>
      <CHildWrapbox item={item} moveChildCard={moveChildCard}/>
    </div>
  )
}
