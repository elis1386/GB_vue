const categories = [
   {
       path: '/payment',
       name: 'Payment',
       component: () => import('../components/TaskList.vue'),
       props: true

   },   
   {
    path: '/Food?amount=:amount',
    name: 'Food',
    component: () => import('../components/TaskList.vue'),
    props: true

},         
   {
       path: '/Food',
       name: 'Food',
       component: () => import('../components/TaskList.vue'),
       props: true

   },  
   {
       path: '/Transport?amount=:amount',
       name: 'Transport',
       component: () => import('../components/TaskList.vue'),
       props: true

},    
   {
       path: '/Transport',
       name: 'Transport',
       component: () => import('../components/TaskList.vue'),
       props: true

   }, 
   {
       path: '/Entertaiment?amount=:amount',
       name: 'Entertaiment',
       component: () => import('../components/TaskList.vue'),
       props: true

},        
   {
       path: '/Entertaiment',
       name: 'Entertaiment',
       component: () => import('../components/TaskList.vue'),
       props: true

   },                    
   {
       path: '/404',
       name: 'ErrorPage',
       component: () => import('../components/ErrorPage.vue'),

     },
     {
       path: '*',
       redirect: { name: 'ErrorPage' }
     },
]

  
  export default categories