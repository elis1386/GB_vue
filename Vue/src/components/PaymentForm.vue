<template>
    <div>
        <div class="container">
        <input class="input-group mb-3" type="text" v-model="description" placeholder="payment description">
        <input class="input-group mb-3" type="text" v-model.number="amount" placeholder="payment amount">
        <input class="input-group mb-3" type="text" v-model="date" placeholder="payment date">
        <button type="button" class="btn btn-success " @click="onSaveClick">Save</button>
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
        }
    },
    computed: {
        getCurrentDate() {
            const today = new Date();
            const d = today.getDate()
            const m = today.getMonth()
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        }
    },
    methods: {
        onSaveClick(){
            const data = {
                description: this.description,
                amount: this.amount,
                date: this.date || this.getCurrentDate,
            }
            this.$emit('addNewPayment',data)
        }
    }
}
</script>

<style scoped>
.btn{
    padding: 5px 30px;
    width: 30%;
}
</style>