// 所有控制状态的的方法
export default {
    add:function(state,action){
        state.num++;
        return {...state}
    },
    setTimu:function(state,action){
        state.timuList = action.content
        return {...state}
    }
}