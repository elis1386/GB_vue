<template>
<div id="app">

  <Calc v-if="0"/>
  <TaskList v-if="0"/>
  <Router/>
  <MyPlugin/>


</div>
</template>

<script>
import Calc from './components/Calc.vue'
import Router from './components/Router.vue'
import MyPlugin from './components/MyPlugin.vue'

export default {
   name: 'Calculator',
   components: {
     Calc,
     Router,
     MyPlugin
   },
   data () {
     return {}
   },

   methods: {
     addNewPayment(data) {
       this.paymentsList = [...this.paymentsList,data]
        },
    helloHandler(){
       console.log("hello I'm handler")
     }
   },
  created () {
    this.$router.push({ name: 'TaskList' })
   },
  mounted() {
     this.$keks.EventBus.$on('hello',this.helloHandler)
   }
}
</script>


