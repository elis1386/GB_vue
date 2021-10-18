import Vue from 'vue'
import App from './App.vue'
import TaskList from './components/TaskList'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'



Vue.component('TaskList', TaskList)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
