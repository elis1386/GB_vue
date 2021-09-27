<template>
    <div>

  <PaymentList :list="responseData" />
  <PaymentForm/>
 







    </div>
</template>


<script>
import PaymentList from './PaymentList.vue'
export default {
    name: 'TaskList',
    components: {
        PaymentList
    },
    data() {
        return {
            responseData: [ 
            {
                data:'28.03.2020',
                category: 'Food',
                value: 169,
            },
            {
                data:'24.03.2020',
                category: 'Transport',
                value: 360,
            },
            {
                data:'24.03.2020',
                category: 'Food',
                value: 532,
            },
            ],
        }
    }
}
</script>

<style scoped>

</style>