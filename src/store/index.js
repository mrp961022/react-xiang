import { createStore } from "redux"
import StateObj from './state' // 引入所有状态
import ActionFnObj from './method' // 引入所有修改状态的方法
// 初始化状态 创建reducer函数
function reducer(state=StateObj,action) {
    // 判断是否为第一次进入 reducer 第一次action的type是redux版本号等内容
    // 通过传入的action不同的type来进行不同的操作
    if(ActionFnObj[action.type]){
        state = ActionFnObj[action.type](state, action)
        return { ...state };
    }else {
        return { ...state };
    }
}
const store = createStore(reducer);
export default store