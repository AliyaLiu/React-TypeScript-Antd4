import React, { useState, useCallback, useMemo,useRef } from 'react'
import { useDrag, DragSourceMonitor,useDrop } from 'react-dnd'
import { Colors } from './Colors'
import { DragItem } from './interfaces'
import styles from './index.scss';
import { CHildBox } from './childBox';


const style: React.CSSProperties = {
  border: '1px dashed gray',
  padding: '2px',
  margin: '10px',
}

export interface CHildWrapboxBoxProps {
  item:any,
  moveChildCard:Function
}

let dragItem:any="";
let isoverItem:Boolean=false;

export const CHildWrapbox: React.FC<CHildWrapboxBoxProps> = ({ item,moveChildCard }) => {

  const updateDtagItem=useCallback((value)=>{
    dragItem=value;
  },[])

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: [Colors.ITEM],
    drop({ item: draggedItem }: { item: any; type: string }) {
      console.log('********');
      // console.log('hover',item,'dragItem',dragItem); //放置的父级元素 当前拖拽的单个元素
      moveChildCard(item,dragItem);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  return (
    <div 
      ref={drop} 
      className={ styles["childWrap"] } 
      >
        {
          item.child&&item.child.map(item=>{
            return(
              <CHildBox key={item.id} card={item} updateDtagItem={updateDtagItem}></CHildBox>
            )
          })
        }
    </div>
  )
}
