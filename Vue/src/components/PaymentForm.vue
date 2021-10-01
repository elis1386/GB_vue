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
export default {
    name: 'PaymentForm',
    props: ['idCount'],
    data(){
        return {
            description: '',
            amount: null,
            date: '',
        }
    },
    computed:{
        getCurrentDate(){
            const today = new Date()
            const d = today.getDate()
            const m = today.getMonth()
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
            }
        },
    methods: {
        addNewPayment() {
            const data = {
            id: this.idCount + 1,
            amount: this.amount,
            description: this.description,
            date: this.date || this.getCurrentDate,
            }        
            this.$emit('getPayment', data);
            
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





