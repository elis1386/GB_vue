import Vue from 'vue'
import Router from 'vue-router'

 
Vue.use(Router)
 
export default new Router({
    mode: 'history',
    routes: [
     {
         path: '/taskList',
         name: 'TaskList',
         component: () => import('../components/TaskList.vue')
     },
     {
        path: '/calc',
        name: 'Calculator',
        component: () => import('../components/Calc.vue')
    },
    {
        path: '/404',
        name: 'ErrorPage',
        component: () => import('../components/ErrorPage.vue')
      },
      {
        path: '*',
        redirect: { name: 'ErrorPage' }
      },
 ]
})


