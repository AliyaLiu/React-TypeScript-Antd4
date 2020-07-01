import React, { useState } from 'react';
import styles from "./index.scss";

function OriginalType(){

    const List = [
        { id:1,name:'type1',child:[{ id:1,name:"child1-1" },{ id:2,name:"child1-2" },{ id:3,name:"child1-3" }] },
        { id:2,name:'type2',child:[{ id:1,name:"child2-1" },{ id:2,name:"child2-2" },{ id:3,name:"child2-3" }] },
        { id:3,name:'type3',child:[{ id:1,name:"child3-1" },{ id:2,name:"child3-2" },{ id:3,name:"child3-3" }] },
        { id:4,name:'type4',child:[{ id:1,name:"child4-1" },{ id:2,name:"child4-2" },{ id:3,name:"child4-3" }] },
        { id:5,name:'type5',child:[{ id:1,name:"child5-1" },{ id:2,name:"child5-2" },{ id:3,name:"child5-3" }] },
        { id:6,name:'type6',child:[{ id:1,name:"child6-1" },{ id:2,name:"child6-2" },{ id:3,name:"child6-3" }] },
        { id:7,name:'type7',child:[{ id:1,name:"child7-1" },{ id:2,name:"child7-2" },{ id:3,name:"child7-3" }] },
        { id:8,name:'type8',child:[{ id:1,name:"child8-1" },{ id:2,name:"child8-2" },{ id:3,name:"child8-3" }] },
        { id:9,name:'type9',child:[{ id:1,name:"child9-1" },{ id:2,name:"child9-2" },{ id:3,name:"child9-3" }] },
      ];

    const starDropParent=(e)=>{
        console.log('onstart',e)
    }

    const ondragParent=(e)=>{
        console.log('onmove',e.target)
    }

    const enddragParent=(e)=>{
        console.log('end',e)
    }

    const starDropChild=(e)=>{
        console.log(e)
    }

    return(
        <div className={styles["moveConteng"]}>
            {
                List.map(item=>{
                    return(
                    <div className={styles["moveWrap"]} 
                        draggable="true"
                        onDragStart={starDropParent}
                        onDrag={ ondragParent }
                        onDragEnd={ enddragParent }
                        key={item.id}
                        >
                        <p>{item.name}</p>
                        {
                            item.child.map(value=>{
                                return(
                                    <span className={styles["moveItem"]} 
                                        draggable="true"
                                        key={item.id+'-'+value.id}
                                        onDragStart={starDropChild}
                                >{value.name}</span>
                                )
                            })
                        }
                    </div>
                    )
                })
            }
        </div>
    )
}

export default OriginalType;