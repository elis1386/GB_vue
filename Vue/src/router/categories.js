const categories = [
   {
       path: '/payment',
       name: 'Payment',
       component: () => import('../components/TaskList.vue')
   },   
   {
    path: '/Food?amount=:amount',
    name: 'Food',
    component: () => import('../components/TaskList.vue')
},         
   {
       path: '/Food',
       name: 'Food',
       component: () => import('../components/TaskList.vue')
   },  
   {
       path: '/Transport?amount=:amount',
       name: 'Transport',
       component: () => import('../components/TaskList.vue')
},    
   {
       path: '/Transport',
       name: 'Transport',
       component: () => import('../components/TaskList.vue')
   }, 
   {
       path: '/Entertaiment?amount=:amount',
       name: 'Entertaiment',
       component: () => import('../components/TaskList.vue')
},        
   {
       path: '/Entertaiment',
       name: 'Entertaiment',
       component: () => import('../components/TaskList.vue')
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

  
  export default categories