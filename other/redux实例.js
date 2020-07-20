import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
let allState = {num: 0}
const reducer = function(state=allState, action) {
    switch (action.type) {
        // 判断动作的类型
        case "add":
            state.num++;
            break;
        case "reduce":
            state.num--;
            break;
        default:
    }
    return {...state};
}
const store = createStore(reducer);
function numAdd(){
    // 通过仓库的方法dispatch进行修改数据
    store.dispatch({type: "add"})
}

function numReduce(){
    store.dispatch({type: "reduce"})
}
// 函数式计数器组件
const Counter = (props) => {
    let state = store.getState();
    return (
        <div>
           <h1>记数数量：{ state.num }</h1> 
           <button onClick={numReduce}>计数减一</button>
           <button onClick={numAdd}>计数加一</button>
        </div>
    )
}



ReactDOM.render(<Counter/>,document.querySelector("#root"))
store.subscribe(()=>{
    ReactDOM.render(<Counter/>,document.querySelector("#root"))
})