const categoriesRoutes = [
   {
       path: '/payment',
       name: 'Payment',
       component: () => import('../components/EasyPayment.vue')
   },           
   {
       path: '/payment/Food',
       name: 'PaymentFood',
       component: () => import('../components/EasyPayment.vue')
   },      
   {
       path: '/payment/Transport',
       name: 'PaymentTransport',
       component: () => import('../components/EasyPayment.vue')
   },      
   {
       path: '/payment/Entertaiment',
       name: 'PaymentEntertaiment',
       component: () => import('../components/EasyPayment.vue')
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

  
  export default categoriesRoutes