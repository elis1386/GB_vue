<template>
<div>
    <div v-for="item in list " :key="item.date"> 
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
                 <tr>
                  <th scope="row">1</th>
                  <td>{{item.data}}</td>
                  <td>{{item.category}}</td>
                  <td>{{item.value}}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>{{item.data}}</td>
                  <td>{{item.category}}</td>
                  <td>{{item.value}}</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
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