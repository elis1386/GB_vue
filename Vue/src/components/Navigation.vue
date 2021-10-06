<template>
    <div>
        <div class="container">
            <a class="btn btn-outline-secondary btn-space" href="#tasklist" role="button">TaskList</a>
            <a class="btn btn-outline-secondary btn-space" href="#calc" role="button">Calculator</a>
            <a class="btn btn-outline-secondary btn-space" href="#404" @click="linkHandler()">Error</a>
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

    }
}
</script>


<style scoped>
.btn-space {
    margin-right: 10px;
}
</style>
