import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        newList: {},
        newList2: [],
        formList:[],
        formList2:[]
    },
    mutations:{
        setResponseDataNewList(state, payload){
            state.newList = payload
        },
        setResponseDataNewList2 (state, payload){
            state.newList2 = payload
        },
        setformDataNewList(state, data){
            state.formList = data
        },
        setformDataNewList2 (state, data){
            state.formList2 = data
        },
        addDataToList (state, data) {
            const lastElement = Object.keys(state.newList)[Object.keys(state.newList).length - 1]
            state.newList[lastElement].push(data)
          },
        addDataToList2 (state, data) {
            state.newList2.push(data)
          }
    },
    actions:{
        fetchData ({ commit }, page) {
            fetch('https://raw.githubusercontent.com/elis1386/GB_vue/lesson4/Vue/src/response.json')
              .then(res => res.json())
              .then(response => {
                const result = [].concat(...Object.values(response))
                commit('setResponseDataNewList', response)
                commit('setResponseDataNewList2', result)
                commit('setformDataNewList2', result.slice(0, 5))
                if (page === 1) commit('setformDataNewList2', response.page1)
              })
          }

    },
})