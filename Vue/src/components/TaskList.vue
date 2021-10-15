<template>
<div>
    <div class="container mt-5">
        <div class="d-grid gap-2 col-2">
            <button type="button" class="btn btn-success mb-3" v-show="!formVisible" @click="getForm"> + Add new payment</button>
            <PaymentForm :id-count="list.length" v-show="formVisible" @getPayment="getPayment" />
             <!-- <FastPay /> -->
        </div>
        <PaymentList :list="newList"/>
        <Pagination :list="list" @choose-page="choosePageHandler"/>
        
    </div>  
</div>
</template>


<script>
// import FastPay from './FastPay.vue'
import PaymentList from './PaymentList.vue'
import PaymentForm from './PaymentForm'
import Pagination from './Pagination.vue'
import {mapActions, mapState, mapMutations} from 'vuex' 

export default {
    name: 'TaskList',
    components: {
        PaymentList, 
        PaymentForm,
        Pagination,
        // FastPay,
    },
    data: () => ({
            activeList: [],
            count: 5,
            formVisible: false,
            list: [ 
            {   
                id: 1,
                date:'28.03.2020',
                description: 'Food',
                amount: 169,
            },
            {
                id: 2,
                date:'24.03.2020',
                description: 'Transport',
                amount: 360,
            },
            {
                id: 3,
                date:'24.03.2020',
                description: 'Food',
                amount: 532,
            },
            {
                id: 4,
                date:'21.03.2020',
                description: 'Clother',
                amount: 12000,
            },
            {
                id: 5,
                date:'19.03.2020',
                description: 'Sport',
                amount: 6000,
            },
            {
                id: 6,
                date:'15.04.2020',
                description: 'Food',
                amount: 320,
            },
            {
                id: 7,
                date:'27.04.2020',
                description: 'Clother',
                amount: 1200,
            },
            {
                id: 8,
                date:'17.05.2020',
                description: 'Sport',
                amount: 300,
            },
            {
                id: 9,
                date:'12.06.2020',
                description: 'Food',
                amount: 5320,
            },
            ],
            page: 1
    }),
    computed: {
        ...mapState(['newList', 'newList2'])
  },
    created () {
        this.fetchData(this.page)
    // this.activeList = this.list.slice(0, 5)
    // this.getResponse()
  },
    methods: {
       ...mapActions(['fetchData']),
       ...mapMutations(['setformDataNewList2']),
        getForm() {
            this.formVisible= !this.formVisible
        },
        getPayment(data) {
            this.list = [...this.list,data]
            this.formVisible = false;
        },
        
        choosePageHandler (page) {
            const startNum = page * this.count
            const lastNum = startNum + this.count
            this.setformDataNewList2(this.newList2.slice(startNum, lastNum))
    }
    },
    
}
</script>

<style scoped>
.btn{
    width: 100%;
}
</style>


