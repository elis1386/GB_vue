<template>
<div id="app">
  <Calc/>
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


