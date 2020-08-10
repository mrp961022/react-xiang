export default {
    setname(state, action){
        return {
            ...state,
            name:action.name
        }
    },
    setage(state, action){
        return {
            ...state,
            age: action.age
        }
    }
}