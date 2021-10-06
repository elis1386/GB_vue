import Vue from 'vue'
import App from './App.vue'
import TaskList from './components/TaskList'
import store from './store'
import router from './router'



Vue.component('TaskList', TaskList)

Vue.config.productionTip = false

new Vue({
  router,
  store, 
  render: h => h(App),
}).$mount('#app')
