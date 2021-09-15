<template>

  <div id="app">
    <div class="display">
      <h2>Calculator</h2>
      
       <input v-model="operand1"/>
       <input v-model="operand2"/>
       = {{result}}
     </div>

     <div class="keyboard">
      <button @click="plusMethod">+</button>
      <button @click="minusMethod">-</button>
      <button @click="divisionMethod">/</button>
      <button @click="multiplecatMethod">*</button>
      <button @click="powerMethod">**</button>
       <button @click="moduloMethod">%</button>
     </div>
  </div>

</template>

<script>
export default {
   name: 'Calculator',
   data(){
       return {
           operand1: 0,
           operand2: 0,
           result: 0
       }
   },
   methods: {
     plusMethod() {
       this.result = +this.operand1 + +this.operand2
     },
     minusMethod(){
       this.result = this.operand1 - this.operand2
     },
      divisionMethod(){
       this.result = this.operand1 / this.operand2
     },
      multiplecatMethod(){
       this.result = this.operand1 * this.operand2
     },
      powerMethod(){
       this.result = this.operand1 ** this.operand2
     },
      moduloMethod(){
       this.result = this.operand1 % this.operand2
     },
   }
 }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
