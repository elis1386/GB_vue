<template>
<div id="app">

  <Calc v-if="0"/>
  <TaskList v-if="0"/>
  <Router/>


</div>
</template>

<script>
import Calc from './components/Calc.vue'
import Router from './components/Router.vue'

export default {
   name: 'Calculator',
   components: {
     Calc,
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


