import React, { useState, useEffect } from "react";
import { Button } from "antd";
// import reducers from "@store/reducers";

interface SquareConfig {
    color?: string;
    width?: number;
    readonly x: number;
}

// interface ReadyonlyDemo {
//     readonly x: number;
//     readonly y: number;
// }
 
export default function Pagedemo(){
    const [ count, setCount ] = useState(0); // 设了初值，所以不用定义类型
    const [ text, setText ] = useState<string | null>(null);
    const [ isshow, setIsshow ] = useState<boolean | false>(false);

    
  
    useEffect(()=>{
       count > 5 && setText("休息一下");
       let isDone : boolean;
       count > 5 ? isDone = true : isDone = false;
       createSquare({color: "black"} as SquareConfig);
       setIsshow(isDone);
       enum Color { red, green, blue };  //枚举类型
       let colorName = Color[1];
       setColorBg(colorName);

        //    let readDemo : ReadyonlyDemo = { x: 10, y: 20 };
        //    readDemo.x = 5;

    },[count]); // 第二个参数的作用是，只有当count改变的时候，函数内的逻辑才会执行。
    
    const [ colorBg, setColorBg ] = useState<string | "white">("white");
    //在这个useEffect中不依赖元素改变而调用 也就不会改变
    useEffect(()=>{
        enum Color { red=1, green, blue };
        let colorName = Color[2];
        setColorBg(colorName);
     },[ count ]); 

     
     //接口---可选属性
    function createSquare(config: SquareConfig): {color: string; area: number} {
        let newSquare = {color: "white", area: 100};
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }

    return (
       <div>
        222
          <p>你点击了Hooks {count} 次 {text}</p>
          <Button type="primary" onClick={()=>{setCount(count+1)}}></Button>
          {
              isshow ? '111' : '0000'
          }
          <div style={{  backgroundColor: (colorBg), width: "100px",  height: "50px" }}></div>
       </div>
    );
};

//url的search转为对象输出
/* function getUrlSearchMap( url : string){
    let search;
    if (url !== undefined) {
        let hashIndex = url.lastIndexOf('#');
        let searchIndex = url.lastIndexOf('?');
        if (searchIndex !== -1) {
            search = hashIndex === -1 ?
                url.substr(searchIndex + 1)
                :
                url.substring(searchIndex, hashIndex);

        } else if (hashIndex !== -1) {
            search = url.substr(hashIndex + 1);
        } else {
            return {};
        }
    } else {
        search = window.location.search;
    }
    if (!search) {
        return {};
    }

    let hashArr: any = search.replace('?', '').split('&');
    let hashMap: any = {};
    for (let i = 0; i < hashArr.length; i++) {
            let tempArr = hashArr[i].split('='),
            k = tempArr[0],
            v = tempArr[1] || true;
            if (hashMap[k]) {
            if (Array.isArray(hashMap[k])) {
                    hashMap[k].push(v);
            } else {
                    hashMap[k] = [hashMap[k], v];
            }
            } else {
            hashMap[k] = v;
            }
    }
    return hashMap;
}; */