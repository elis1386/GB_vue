<template>
<div>
<div class="container">

    <table class="table">
         <thead>
             <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Category</th>
              <th scope="col">Value</th>
             </tr>
        </thead>
            <tbody>
                 <tr v-for="item in list " :key="item.id">
                  <th scope="row">{{item.id}}</th>
                  <td>{{item.data}}</td>
                  <td>{{item.category}}</td>
                  <td>{{item.value}}</td>
                </tr>
  </tbody>
</table>
    </div>
  </div>

</template>


<script>
export default {
    name: 'PaymentList',
    props: {
        list: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>

</style>