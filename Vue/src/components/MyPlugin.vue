<template>
    <div>
   <h1 @click="$keks.hello()">
    Huomenta
   </h1>
    </div>
</template>

<script>
export default {
    name: "MyPlugin",
    mounted() {
        this.$keks.hello()
    }
}
</script>

<style scoped>

</style>