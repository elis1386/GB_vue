import Vue from 'vue'
import App from './App.vue'
import TaskList from './components/TaskList'
import store from './store'
import router from './router'
import myplugin from './plugins/myplugin'



Vue.component('TaskList', TaskList)

Vue.config.productionTip = false
Vue.use(myplugin)


new Vue({
  router,
  store, 
  render: h => h(App),
}).$mount('#app')
