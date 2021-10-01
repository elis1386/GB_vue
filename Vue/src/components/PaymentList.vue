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
            <tbody>
                 <tr v-for="item in list " :key="item.id">
                  <th scope="row">{{item.id}}</th>
                  <td>{{item.date}}</td>
                  <td>{{item.description}}</td>
                  <td>{{item.amount}}</td>
                </tr>
  </tbody>
</table>
    </div>
  </div>

</template>


<script>
export default {
    name: 'PaymentList',
    props: ['list']
}
</script>

<style scoped>

</style>