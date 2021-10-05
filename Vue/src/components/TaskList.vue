<template>
    <div>
    <div class="container ">
    <div class="d-grid gap-2 col-2">
       <button type="button" class="btn btn-success mb-3" v-show="!formVisibl" @click="getForm"> + Add new payment</button>
       <PaymentForm :list="responseData" v-show="formVisibl" @getPayment="getPayment" />
    </div>
</div>
  <PaymentList :list="responseData" />

  

 







    </div>
</template>


<script>
import PaymentList from './PaymentList.vue'
import PaymentForm from './PaymentForm'

export default {
    name: 'TaskList',
    components: {
        PaymentList, PaymentForm
    },
    data() {
        return {
            responseData: [ 
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
                date:'18.03.2020',
                description: 'Food',
                amount: 540,
            },
            ],
            formVisibl: false,
        }
    },
    methods: {
        getForm() {
            this.formVisibl= !this.formVisibl
        },
        getPayment(data) {
            this.responseData = [...this.responseData,data]
        }
    }
}
</script>

<style scoped>

</style>


