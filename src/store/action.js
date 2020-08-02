export default {
    setname(state, action){
        return {
            ...state,
            name:action.name
        }
    }
}