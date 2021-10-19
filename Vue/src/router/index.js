import Vue from 'vue'
import VueRouter from 'vue-router'
import TaskList from '../components/TaskList'
import categories from './categories'

 
Vue.use(VueRouter)

const routes = [
    {
        path: '/taskList',
        name: 'TaskList',
        component: TaskList
    },

    ...categories,
    {
        path: '/calc',
        name: 'Calculator',
        component: () => import('../components/Calc.vue') 
    }
]

const router = new VueRouter ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
