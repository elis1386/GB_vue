<template>
  <div id="app">
    <h2 class="text">Calculator</h2>
    <input class="inputarea" v-model.number="operand1">
    <input class="inputarea" v-model.number="operand2">
    <p class="error" v-if="error">ERROR</p>
    <h2 class="text">= {{result}}</h2>
    <button class="actions" v-for="item in items" :key="item.value" @click="calcHandler(item.value)">
      {{ item.name }}
    </button>
    <div class="checkbox">
      <input type="checkbox" id="checkbox" v-model="keyVisible">&nbsp;
      <label class="text" for="checkbox">Отобразить экранную клавиатуру</label>
    </div> 
    <div v-show="keyVisible">
      <button class="numbers" v-for="number in numbers" :key="number" @click="keyBoard(number)">
        {{ number }}
      </button>
      <button class="numbers" @click="deleteNumber()" > &larr; </button>

      <div class="radio">
        <input type="radio" id="one" value="operand1" v-model="picked">
        <label for="one">operand1</label>
        <input type="radio" id="two" value="operand2" v-model="picked">
        <label for="two">operand2</label>  
      </div>
    </div>  
  </div>

</template>

<script>
export default {
   name: 'Calculator',
   data:() => ({
           operand1: 0,
           operand2: 0,
           result: 0,
           str: null,
           error: false,
           keyVisible: false,
           cheked: false,
           picked: 'operand1',
           items: [
            {
             name: 'plus',
             value: '+'
            },
            {
             name: 'minus',
             value: '-'
            },
            {
             name: 'division',
             value: '/'
            },
            {
             name: 'multiplecat',
             value: '*'
            },
            {
             name: 'power',
             value: '**'
            },
            {
             name: 'mudolo',
             value: '%'
            },
           ],
           numbers: [0,1,2,3,4,5,6,7,8,9],
   }),
   methods: {
     calcHandler (name){
       this.error = false
        switch (name){
          case '+':
            this.plus()
            break;
          case '-':
            this.minus()
            break;
          case '/':
            this.division()
            break;
          case '*':
            this.multiplecat()
            break;
          case '**':
            this.power()
            break;
          case '%':
            this.modulo()
            break;          
        }
     },
     plus() {
       this.result = this.operand1 + this.operand2
     },
     minus() {
       this.result = this.operand1 - this.operand2
     },
     division() {
       if (this.operand2 !== 0){
       this.result = this.operand1 / this.operand2
     }else {
        this.error = true
     }
     },
     multiplecat() {
       this.result = this.operand1 * this.operand2
     },
     power() {
       this.result = this.operand1 ** this.operand2
     },
     modulo() {
       this.result = this.operand1 % this.operand2
     },
     keyBoard(number) {
       if (this.picked === 'operand1'){
       this.operand1 = number
       }else {
         this.operand2 = number
       }
     },
     deleteNumber(){
        if (this.picked === 'operand1'){
       this.operand1 = 0
     }else {
         this.operand2 = 0
       }
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
.inputarea {
  border-color: rgb(128, 126, 126);
  padding: 8px;
  margin-right: 3px;
}
.actions {
  border: 0,3px rgb(128, 126, 126);
  padding: 10px;
  color: rgb(90, 90, 90);
}
.actions:hover {
  padding: 10px;
  border: rgb(200, 241, 153);
}
.numbers {
  border: rgb(128, 126, 126);
  padding: 10px;
  color: rgb(90, 90, 90);
}
.text {
color: rgb(90, 90, 90);
}
.error {
  color: red;
}
.checkbox {
  margin-top: 30px;
  margin-bottom: 20px;
}
.radio {
  margin-top: 10px;
}

</style>