import React, { useState, useRef } from 'react';

// class App extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={()=>{
//                     this.refs.s1.style.background="red"
//                 }}>加一</button>
//                 <span ref="s1">aaa</span>
//             </div>
//         );
//     }
// }
function App1() {
    const p1 = useRef();
    const [a, setA] = useState(0);
    return (
        <div>
            <p ref={p1}>{a}</p>
            <button onClick={()=>{
                setA(a+1);
            }}>加一</button>
            <button onClick={()=>{
                p1.current.style.background="red"
            }}>改变样式</button>
        </div>
    )
}

export default App1;