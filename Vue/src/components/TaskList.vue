<template>
    <div>
    <div class="d-grid gap-2 d-md-block">
       <button type="button" class="btn btn-success mb-3" @click="getForm"> + Add new payment</button>
       <PaymentForm :list="responseData" v-show="formVisibl" @getPayment="getPayment" />
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
                data:'28.03.2020',
                category: 'Food',
                value: 169,
            },
            {
                id: 2,
                data:'24.03.2020',
                category: 'Transport',
                value: 360,
            },
            {
                id: 3,
                data:'24.03.2020',
                category: 'Food',
                value: 532,
            },
            {
                id: 4,
                data:'21.03.2020',
                category: 'Clother',
                value: 12000,
            },
            {
                id: 5,
                data:'19.03.2020',
                category: 'Sport',
                value: 6000,
            },
            {
                id: 6,
                data:'18.03.2020',
                category: 'Food',
                value: 540,
            },
            ],
            formVisibl: false,
        }
    },
    methods: {
        getForm() {
            this.formVisibl= !this.formVisibl
        },
        getPayment(addData) {
            this.responseData = [...this.responseData,addData]
        }
    }
}
</script>

<style scoped>

</style>