import React, { memo,useCallback,useState, useEffect } from 'react'
import { SourceBox } from './SourceBox'
import { StatefulTargetBox as TargetBox } from './TargetBox'
import { Colors } from './Colors'
import { listenerCount } from 'cluster'
import update from 'immutability-helper'

export const Container: React.FC = memo(function Container() {

  const [List,setList] = useState<Array<any>>([]);
  const defaultList = JSON.parse(JSON.stringify(List));

  useEffect(()=>{
    setList([
      { id:1,name:'type1',child:[{ id:"1-1",name:"child1-1" },{ id:"1-2",name:"child1-2" },{ id:"1-3",name:"child1-3" }] },
      { id:2,name:'type2',child:[{ id:"2-1",name:"child2-1" },{ id:"2-2",name:"child2-2" },{ id:"2-3",name:"child2-3" }] },
      { id:3,name:'type3',child:[{ id:"3-1",name:"child3-1" },{ id:"3-2",name:"child3-2" },{ id:"3-3",name:"child3-3" }] },
    ])
  },[])
  
  // draggedItem：当前拖动的    item：放置的元素
  const moveCard=(item,draggedItem,parentindex)=>{
    if( parentindex===-1 ){
      let Index1 = List.indexOf(item);
      let Index2 = List.indexOf(draggedItem);
      List.splice(Index2,1);
      List.splice(Index1,0,draggedItem);
      setList(JSON.parse(JSON.stringify(List)));
    }
  }

  const moveChildCard=(item,dragItem)=>{
    if( dragItem ){
      let Index1 = List.indexOf(item);
      for( let i=0;i<List.length;i++ ){
        if( List[i].child.includes(dragItem) ){
          if( Index1!==i ){
            let index = List[i].child.indexOf(dragItem);
            List[i].child.splice(index,1);
            break;
          }
        }
      }
      if( !List[Index1].child.includes(dragItem) ){
        List[Index1].child.push(dragItem);
        setList(JSON.parse(JSON.stringify(List)));
      }
    }
  }

  return (
    <>
      <div style={{ overflow: 'hidden', clear: 'both'}}>
        <div style={{ float: 'left' }}>
          {
            List.map((item,index)=>{
              return(
                <SourceBox key={item.id} 
                  type={"parent"} 
                  item={item} 
                  parentindex={-1} 
                  moveCard={ moveCard }
                  moveChildCard={moveChildCard}
                  >
                </SourceBox>
              )
            })
          }
        </div>

        {/* <div style={{ float: 'left', marginLeft: '5rem', marginTop: '.5rem' }}>
          <TargetBox />
        </div> */}
      </div>
    </>
  )
})
