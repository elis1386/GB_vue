<template>
    <div>
        <form class="container">
        <input class="input-group mb-3" type="text" v-model="description" placeholder="payment description">
        <input class="input-group mb-3" type="text" v-model.number="amount" placeholder="payment amount">
        <input class="input-group mb-3" type="text" v-model="date" placeholder="payment date">
        <FastPay />
        <button type="button" v-show="!isEmpty" class="btn btn-primary mb-3"  @click="addNewPayment"> + Add </button>
        </form>
    </div>
</template>

<script>
import {getCurrentDate} from '../utils'
import FastPay from './FastPay.vue'
import { mapMutations, mapState } from 'vuex'
import { fastBtns } from '../assets/selects'
export default {
    components:{
        FastPay
    },
    name: 'PaymentForm',
    props: ['idCount'],
    data(){
        return {
            id: 0,
            description: '',
            amount: 0,
            date: '',
            formVisible: false,
        }
    },
    
    mounted(){
        this.setParams()
    },    
    computed:{
        ...mapState(['newList2']),
        list(){
            return fastBtns
        },
        getRouteParams(){
            return {
                name: this.$route.name,
                params: this.$route.params
            }
        },
        isEmpty(){
            return this.date && this.amount && this.description
        }
        },
    methods: {
        getMatch(){
            return this.list.some(el => el.description === this.$route.name)
        },
        getCurrentDate,
        ...mapMutations(['addDataToList', 'addDataToList2']),
        addNewPayment() {
            const data = {
            id: this.newList2.length + 1,
            amount: this.amount,
            description: this.description,
            date: this.date || this.getCurrentDate(),
            }  
            this.addDataToList2(data) 
            this.setParams() 
            this.formVisible = false;   
            },
        setParams(){
            if(this.getMatch()){
                this.date = this.getCurrentDate()
                this.amount = this.$$route.params?.amount
                this.description = this.$$route.name
            }else {
                this.date = null
                this.description = null
                this.amount = null
            }
         
        }    
        },
    
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





