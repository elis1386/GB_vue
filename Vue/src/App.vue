<template>
<div id="app">
  <Calc v-if="0"/>

<TaskList/>







</div>
</template>

<script>
import Calc from './components/Calc.vue'

export default {
   name: 'Calculator',
   components: {
     Calc
   },
   data () {
     return
   },
   methods: {
     addNewPayment(data) {
       this.paymentsList = [...this.paymentsList,data]
     }
   },
}
</script>


