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
      { id:1,name:'type1',child:[{ id:1,name:"child1-1" },{ id:2,name:"child1-2" },{ id:3,name:"child1-3" }] },
      { id:2,name:'type2',child:[{ id:1,name:"child2-1" },{ id:2,name:"child2-2" },{ id:3,name:"child2-3" }] },
      { id:3,name:'type3',child:[{ id:1,name:"child3-1" },{ id:2,name:"child3-2" },{ id:3,name:"child3-3" }] },
      // { id:4,name:'type4',child:[{ id:1,name:"child4-1" },{ id:2,name:"child4-2" },{ id:3,name:"child4-3" }] },
      // { id:5,name:'type5',child:[{ id:1,name:"child5-1" },{ id:2,name:"child5-2" },{ id:3,name:"child5-3" }] },
      // { id:6,name:'type6',child:[{ id:1,name:"child6-1" },{ id:2,name:"child6-2" },{ id:3,name:"child6-3" }] },
      // { id:7,name:'type7',child:[{ id:1,name:"child7-1" },{ id:2,name:"child7-2" },{ id:3,name:"child7-3" }] },
      // { id:8,name:'type8',child:[{ id:1,name:"child8-1" },{ id:2,name:"child8-2" },{ id:3,name:"child8-3" }] },
      // { id:9,name:'type9',child:[{ id:1,name:"child9-1" },{ id:2,name:"child9-2" },{ id:3,name:"child9-3" }] },
      // { id:10,name:'type10',child:[{ id:1,name:"child10-1" },{ id:2,name:"child10-2" },{ id:3,name:"child10-3" }] },
      // { id:11,name:'type11',child:[{ id:1,name:"child11-1" },{ id:2,name:"child11-2" },{ id:3,name:"child11-3" }] },
      // { id:12,name:'type12',child:[{ id:1,name:"child12-1" },{ id:2,name:"child12-2" },{ id:3,name:"child12-3" }] },
      // { id:13,name:'type13',child:[{ id:1,name:"child13-1" },{ id:2,name:"child13-2" },{ id:3,name:"child13-3" }] },
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

  return (
    <>
      <div style={{ overflow: 'hidden', clear: 'both'}}>
        <div style={{ float: 'left' }}>
          {
            List.map((item,index)=>{
              return(
                <SourceBox key={item.id} type={"parent"} item={item} parentindex={-1} moveCard={ moveCard }>
                  {
                    item.child.map((value,indexChild)=>{
                      return(
                          <SourceBox key={item.id+"-"+value.id} type={"child"} item={value} parentindex={indexChild} moveCard={ moveCard }/>
                      )
                    })
                  }
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
