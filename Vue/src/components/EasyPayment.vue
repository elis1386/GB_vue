<template>
    <div>
        <div class="container">
            <div class="fast-add" v-if="0">
                <a class="btn  btn-space" @click="addFood">Food for $200</a>
                <a class="btn  btn-space" @click="addTransport">Transport for $50 </a>
                <a class="btn  btn-space" @click="addEntertaiment">Entertament for $2000</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'EasyPayment',
    
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