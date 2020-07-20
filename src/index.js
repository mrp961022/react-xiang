import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from "redux"
import { Provider, connect } from 'react-redux'


class Counter extends React.Component{
    render() {
        // 计数 通过store的state传给props 直接通过props就可以将state的数据获取
        // const value = this.props.value;
        // 将修改数据的事件或者方法传入到props
        // const onAddClick = this.props.onAddClick;
        const { value, onAddClick } = this.props;
        return (
            <div>
                <h1>计数的数量：{ value }</h1>
                <button onClick={ onAddClick }>数字+1</button>
            </div>
        )
    }
}
const addAction = {
    type: "add"
}
const ActionFnObj = {
    add:function(state,action){
        state.num++;
        return {...state}
    }
}
const AllStat = {
    num: 0
}
function reducer(state=AllStat,action) {
    // 判断是否为第一次进入 reducer 第一次action的type是redux版本号等内容
    if(ActionFnObj[action.type]){
        state = ActionFnObj[action.type](state, action)
        return { ...state };
    }else {
        return { ...state };
    }
}
const store = createStore(reducer);
// 定义一个将状态映射到props上的一个函数
function mapStateToProps(state){
    return {
        value: state.num
    }
}
// 将修改state数据的方法映射到props 默认会传入store里的dispatch方法
function mapDispatchToProps(dispatch) {
    return {
        onAddClick: ()=>{ dispatch(addAction) }
    }
}

// 将上面两个方法 将数据仓库的state和修改state的方法映射到组件上 形成新的组件
const App = connect (
    mapStateToProps,
    mapDispatchToProps
)(Counter)


ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.querySelector("#root")
 )