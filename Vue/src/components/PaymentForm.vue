<template>
    <div>
        <form class="container">
        <input class="input-group mb-3" type="text" v-model="description" placeholder="payment description">
        <input class="input-group mb-3" type="text" v-model.number="amount" placeholder="payment amount">
        <input class="input-group mb-3" type="text" v-model="date" placeholder="payment date">
        <button type="button" class="btn btn-primary mb-3"  @click="addNewPayment"> + Add </button>
        </form>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'PaymentForm',
    props: ['idCount'],
    data(){
        return {
            id: 0,
            description: '',
            amount: 0,
            date: '',
        }
    },
    computed:{
        ...mapState(['newList2']),
        getCurrentDate(){
            const today = new Date()
            const d = today.getDate()
            const m = today.getMonth()
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
            }
        },
    methods: {
         ...mapMutations(['addDataToList', 'addDataToList2']),
        addNewPayment() {
            const data = {
            id: this.newList2.lenght + 1,
            amount: this.amount,
            description: this.description,
            date: this.date || this.getCurrentDate,
            }   
            // this.addDataToList(data)
            this.addDataToList2(data)    
            // this.$emit('getPayment', data);
            
            }
        }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
}
.btn{
    padding: 10px;
    width: 100%;
}
.input-group {
    width: 100%;
    padding: 10px;
}
</style>





