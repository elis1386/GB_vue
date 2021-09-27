<template>
    <div>
        <div class="container" >
        <input class="input-group mb-3" type="text" v-model="description" placeholder="payment description">
        <input class="input-group mb-3" type="text" v-model.number="amount" placeholder="payment amount">
        <input class="input-group mb-3" type="text" v-model="date" placeholder="payment date">
        <button type="button" class="btn btn-success mb-3" @click="addNewPayment"> + Add new payment</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentForm',
    data(){
        return {
            description: '',
            amount: 0,
            date: '',
            formVisibl: false,
        }
    },
    props: {
       list: {
           type: Array,
           default: () => []
       }
    },
    methods: {
        addNewPayment(){
            const data = {
                id: this.id,
                description: this.description,
                amount: this.amount,
                date: this.date 
            }
            this.$emit('addNewPayment',data)
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
    width: 30%;
}
.input-group {
    width: 30%;
    padding: 10px;
}
</style>