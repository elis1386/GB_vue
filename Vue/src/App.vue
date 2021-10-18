<template>
<div id="app">
  <Router/>
</div>
</template>

<script>
import Router from './components/Router.vue'

export default {
   name: 'Calculator',
   components: {
     Router
   },
   data () {
     return {}
   },

   methods: {
     addNewPayment(data) {
       this.paymentsList = [...this.paymentsList,data]
        },
   },
   created () {
  this.$router.push({ name: 'TaskList' })
   },
}
</script>


