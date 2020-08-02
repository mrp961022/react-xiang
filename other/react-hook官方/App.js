// import React, { useState, useRef, useEffect,useMemo } from 'react';
// import ChildMomo from './component/ChildMemo'
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

// function App1() {
//     const p1 = useRef();
//     const [a, setA] = useState(0);
//     const [obj, setObj] = useState({ name:"lisi" })
//     const [arr, setArr] = useState([1,2,3]);
//     // useEffect(()=>{
//     //     console.log('useEffect', a)
//     // }, [a])
//     let res = useMemo(()=>{
//         return a;
//     }, [])
//     // const [fun, setFun] = useState(()=>{
//     //     return 1;
//     // }) // fucntion返回值的类型就是state的类型
//     return (
//         <div>
//             <p ref={p1}>{res}</p>
//             <button onClick={()=>{
//                 setA(()=>{
//                     return a+1;
//                 })
//                 console.log(a)
//             }}>加一</button>
//             <button onClick={()=>{
//                 p1.current.style.background="red"
//             }}>改变样式</button>
//             <p>{obj.name}----{obj.age}</p>
//             <button onClick={()=>{
//                 setObj({
//                     ...obj,
//                     name:"zhangsan",
//                     age: 19
//                 })
//             }}>修改对象</button>
//             <p>{arr}</p>
//             <button onClick={()=>{
//                 setArr(()=>{
//                     arr.push(4)
//                     return [...arr]
//                 })
//             }}>修改数组</button>
//         </div>
//     )
// }

// function App2() {
//     let [count, setCount] = useState(0);
//     let [num, setNum] = useState(0);
//     let res = useMemo(()=>{
//         return {count, num};
//     },[count])
//     return(
//         <div>
//             <h3>count{res.count}----num{res.num}</h3>
//             <button onClick={()=>{
//                 setCount(count+1)
//                 console.log('count', count)
//             }}>改变count</button>
//             <button onClick={()=>{
//                 setNum(num+1)
//                 console.log('num', num)
//             }}>改变num</button>
//         </div>
//     )
// }
// function App3(){
//     let [count, setCount] = useState(0);
//     let [num, setNum] = useState(0);
//     return(
//         <div>
//             <h3>count{count}----num{num}</h3>
//             <ChildMomo c={count} a={num}></ChildMomo>
//             <button onClick={()=>{
//                 setCount(count+1)
//                 console.log('count', count)
//             }}>改变count</button>
//             <button onClick={()=>{
//                 setNum(num+1)
//                 console.log('num', num)
//             }}>改变num</button>
//         </div>
//     )
// }
// import UseCallBack from "./component/UseCallBack";
// import UseImperativeHandle from './component/useImperativeHandle'
// import UseLayoutEffect from './component/UseLayoutEffect'
import UseReducer from './component/UseReducer'
export default UseReducer;