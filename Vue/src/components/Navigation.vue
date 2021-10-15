<template>
    <div>
        <div class="container">
            <router-link to="/taskList"><a class="btn btn-outline-secondary btn-space " href="#tasklist" role="button">TaskList</a></router-link>
            <router-link to="/calc"><a class="btn btn-outline-secondary btn-space" href="#calc" role="button">Calculator</a></router-link>
            <router-link to="/404"><a class="btn btn-outline-secondary btn-space" href="#404">Error</a></router-link>

            
            <router-view />
        </div>
        <TaskList v-if="page === 'tasklist' "/>
        <Calc v-if="page === 'calc' "/>
        <ErrorPage v-if="page === '404' "/>




    </div>
</template>

<script>
import TaskList from './TaskList.vue'
import Calc from './Calc.vue'
import ErrorPage from './ErrorPage.vue'
export default {
    name: "Navigation",
    props:{
        page: String
    },
    components: {
        TaskList,
        Calc,
        ErrorPage
    },
    methods: {
        addFood() {
      this.$router.push({
        name: 'PaymentFood',
        query: {
          amount: 200,          
        }
      }).catch(error => {
          if (
            error.name !== 'NavigationDuplicated' &&
            !error.message.includes('Avoided redundant navigation to current location')
          ) {
            console.log(error)
          }
        })
    },
    addTransport() {
      this.$router.push({
        name: 'PaymentTransport',
        query: {
          amount: 50,          
        }
      }).catch(error => {
          if (
            error.name !== 'NavigationDuplicated' &&
            !error.message.includes('Avoided redundant navigation to current location')
          ) {
            console.log(error)
          }
        })
    },
    addEntertaiment() {
      this.$router.push({
        name: 'PaymentEntertaiment',
        query: {
          amount: 2000,          
        }
      }).catch(error => {
          if (
            error.name !== 'NavigationDuplicated' &&
            !error.message.includes('Avoided redundant navigation to current location')
          ) {
            console.log(error)
          }
        })
    },        

    }
}
</script>


<style scoped>
.btn-space {
    margin-right: 10px;
}

</style>
