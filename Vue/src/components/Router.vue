<template>
    <div>
    <Navigation :page ="page"/>
    </div>
</template>

<script>
import Navigation from './Navigation.vue'
export default {
    name: "Router",
    components: {
        Navigation,

    },
     data() {
        return {
            page: ''
        }
    },
    methods: {
        setPage() {
            this.page = location.hash.slice(1)
        }
    },
    mounted() {
        this.setPage()
        window.addEventListener('hashchanged', () => {
            this.setPage()
        })
    }
}

</script>


<style scoped>

</style>
