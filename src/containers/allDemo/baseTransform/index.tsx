import React, { useState, useEffect } from 'react';

function BaseTransform(){
    const [ originnum , setOriginnum ] = useState(159);
    const [ twonum , setTwonum ] = useState('10011111');

    useEffect(
        ()=>{
            twoTran();
        }
    );

    function twoTran(){
        let transArr = (twonum+"").split("");
        console.log(transArr)
    }

    return(
        <div>
            <p>进制转换:原始的10进制值为{ originnum }</p>
            <p> 10转2: { originnum.toString(2) }</p>
            <p> 10转8: { originnum.toString(8) }</p>
            <p> 10转16: { originnum.toString(16) }</p>
            <p>进制转换:原始的2进制值为{ twonum }</p>

            <p> 2转8: { parseInt(twonum) }</p>
            <p> 2转10: { parseInt('0x'+twonum, 16 ) }</p>
            <p> 2转16: { parseInt(twonum, 16) }</p>
        </div>
    )
}

export default BaseTransform;