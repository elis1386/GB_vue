import Vue from 'vue'
import App from './App.vue'
import TaskList from './components/TaskList'
import store from './store/index'



Vue.component('TaskList', TaskList)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store, 
}).$mount('#app')
