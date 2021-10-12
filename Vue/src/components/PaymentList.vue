<template>
<div>
<div class="container">
   
    <table class="table">
         <thead>
             <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
             </tr>
        </thead>
        <template>
            <tbody>
                 <tr v-for="(item,index) in formList2" :key="index">
                  <th scope="row">{{item.id}}</th>
                  <td>{{item.date}}</td>
                  <td>{{item.description}}</td>
                  <td>{{item.amount}}</td>
                </tr>
            </tbody>
        </template>
         <template>
            <tbody>
                 <tr v-for="(item,index) in formList" :key="index">
                  <th scope="row">{{item.id}}</th>
                  <td>{{item.date}}</td>
                  <td>{{item.description}}</td>
                  <td>{{item.amount}}</td>
                </tr>
            </tbody>
        </template>

</table>
    </div>
  </div>

</template>


<script>
import { mapState } from 'vuex'
export default {
    name: 'PaymentList',
    props: ['list'],
    computed: {
    ...mapState(['formList', 'formList2', 'newList'])
  }
}
</script>

<style scoped>

</style>