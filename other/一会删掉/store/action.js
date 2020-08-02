export default {
    changeage(state, action){
        return {
            ...state,
            age:action.age
        }
    },
    changename(state, action){
        return {
            ...state,
            name:action.name
        } 
    },
    changenum(state, action){
        return {
            ...state,
            num: state.num*2
        }
    }
}