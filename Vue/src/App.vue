<template>

  <div id="app">
    <h2>Calculator</h2>
      
    <input  v-model.number="number">
    <input  v-model.number="number">

    <p class="error" v-if="error">ERROR</p>
    <h2 class="text">= {{result}}</h2>

    <button class="actions" v-for="item in items" :key="item.value" @click="calcHandler(item.value)">
      {{ item.name }}
    </button>

    <div class="checkbox">
      <input type="checkbox" id="checkbox">
      <label for="checkbox">Отобразить экранную клавиатуру</label>
    </div> 
    
    <button class="numbers" v-for="number in numbers" :key="number.id" @click="keyBoard(number.id)">
      {{ number.value}}
    </button>

    <div class="radio">
    <input type="radio" id="one" value="operand1" v-model="picked">
    <label for="one">operand1</label>
    <input type="radio" id="two" value="operand2" v-model="picked">
    <label for="two">operand2</label>  
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
           keyboardVisibl: false,
           cheked: false,
           picked: false,
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
           numbers: [
             {
              id: 0,
              value: 0
             },
             {
              id: 1,
              value: 1
             },
             {
              id: 2,
              value: 2
             },
             {
              id: 3,
              value: 3
             },
             {
              id: 4,
              value: 4
             },
             {
              id: 5,
              value: 5
             },
             {
              id: 6,
              value: 6
             },
             {
              id: 7,
              value: 7
             },
             {
              id: 8,
              value: 8
             },
             {
              id: 9,
              value: 9
             },
           ]
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
       this.number = number.value
       
     }
   },
//   //  computed: {
//   //       showKyeboard() {
//   //           return this.keyboardVisibl ? 'Hide keyboard' : 'Show keyboard'
//   //       },
// }
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
.actions {
  border: rgb(128, 126, 126);
  padding: 10px;
  color: rgb(90, 92, 92);
}
.numbers {
  border: rgb(128, 126, 126);
  padding: 10px;
  color: rgb(90, 92, 92);
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
