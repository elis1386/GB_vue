<template>
    <div>
        <div class="container">
            <PaymentForm 
            :easyAmount="amount"
            :easyDescription="description"
            />
            <PaymentList/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EasyPayment',
    components: {
        PaymentList, 
        PaymentForm,
    },
    data() {
        return{
            description: 'easy',
            amount: 0,
        }
    },
    mounted() {
        this.amount = this.$route.query.amount
        this.description = this.$route.path.split('/'[2])
    }
}
</script>