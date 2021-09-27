import Vue from 'vue'
import App from './App.vue'
import TaskList from './components/TaskList'
import PaymentForm from './components/PaymentForm'


Vue.component('TaskList', TaskList)
Vue.component('PaymentForm', PaymentForm)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
