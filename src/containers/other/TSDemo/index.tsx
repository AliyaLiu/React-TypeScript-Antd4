import React, { useState } from "react";
import { Button } from "antd";
// import Demo from './demo'
// // import Test from './Test';
// import Demohooks from './demo';
// // import Demopagecom from './page/demo';
// const TSDemo = () => 
//     <div>
//         {/* <Test/> */}
//         <Demohooks/>
//         {/* <Demopagecom /> */}
//     </div>;
// export default TSDemo;

export default function Test() {
    const [state, setState] = useState({ a: 1, b: 1, c: 1 });
    const [value, setValue] = useState(11);
    return (
        <div>
            <div>
                state{state.a},{state.b}
            </div>
            <Button
                type="default"
                onClick={() => {
                    //@ts-ignore
                    setState({ a: 2, b: 1 });
                    //@ts-ignore
                    setState({ a: 2, b: 2 });
                    console.log(state, 'state');
                }}
            >
                测试
            </Button>
            <hr />
            <div>value{value}</div>
            <Button
                type="default"
                onClick={() => {
                    setValue(value + 1);
                }}
            >
                测试
            </Button>
            {/* <Demo value={state} /> */}
        </div>
    );
}
