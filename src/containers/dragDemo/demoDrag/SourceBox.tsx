import React, { useState, useCallback, useMemo,useRef } from 'react'
import { useDrag, DragSourceMonitor,useDrop } from 'react-dnd'
import { Colors } from './Colors'
import { DragItem } from './interfaces'
import { parse } from 'url'
// import Childitem from './childitem'
// import Parentitem from './parentitem'
import styles from './index.scss';

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
  parentindex:number,
}

export const SourceBox: React.FC<SourceBoxProps> = ({ children,item,type,moveCard,parentindex }) => {
  const [forbidDrag, setForbidDrag] = useState(false)
  const ref = useRef(null);
  const [{ isDragging }, connectDrag] = useDrag({
    item: { item,type: `${type==="parent"?Colors.CARD:Colors.ITEM}` },
    begin(monitor){
      console.log('type11111',type);
    },
    end(monitor) {
      // console.log('monitor',monitor);
      // 当前拖拽的 item 组件
      // const item = monitor.getItem()
      // 拖拽元素放下时，drop 结果
      // const dropResult = monitor.getDropResult()
  
      // 如果 drop 结果存在，就弹出 alert 提示
      // if (dropResult) {
      //   alert(`You dropped ${item.name} into ${dropResult.name}!`)
      // }
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
    accept: [Colors.CARD, Colors.ITEM],
    drop({ item: draggedItem }: { item: any; type: string }) {
      if ( JSON.stringify(item)!==JSON.stringify(draggedItem)&&(item.hasOwnProperty("child")===draggedItem.hasOwnProperty("child") )) {
        console.log('isover',isOver);
        moveCard(item,draggedItem,parentindex);
      }
    },
    hover(item, monitor){
      console.log('hover',item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  // console.log('isOver',isOver);


  const onToggleForbidDrag = useCallback(() => {
    setForbidDrag(!forbidDrag)
  }, [forbidDrag])

  const containerStyle = useMemo(
    () => ({
      ...style,
      opacity: isDragging ? 0.4 : 1,
      cursor: forbidDrag ? 'default' : 'move',
      backgroundColor:"#fff",
    }),
    [isDragging, forbidDrag],
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
      {children}
    </div>
  )
}
