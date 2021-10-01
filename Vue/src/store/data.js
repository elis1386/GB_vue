const state = {
    list:[],
}

const actions = {
    getResponse({commit}){
        const data = [1,2,3,]
        commit('setResponseData', data)
        console.log("123")
    }
}
const mutations = {
    setResponseData(state, payload){
        state.list.push()
    }
}










export default {
    namespaced: true,
    state,
    mutations,
    actions
}




