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
          <tr v-for="(item,id) in formList2" :key="id">
            <th scope="row">{{item.id}}</th>
              <td>{{item.date}}</td>
              <td>{{item.description}}</td>
              <td>{{item.amount}}</td>
          </tr>
        </tbody>
      </template>
      <template>
        <tbody>
          <tr v-for="(item,id) in formList" :key="id">
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
    ...mapState(['formList', 'formList2', 'newList','newList2'])
  }
}
</script>

<style scoped>

</style>