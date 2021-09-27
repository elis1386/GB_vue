<template>
    <div>
        <input class="input-group mb-3" type="text" placeholder="payment description">
        <input class="input-group mb-3" type="text" placeholder="payment amount">
        <input class="input-group mb-3" type="text" placeholder="payment date">
        <button type="button" class="btn btn-success">Add new</button>
    </div>
</template>

<script>
export default {
    name: 'PaymentForm',
    data(){
        return {
            category: '',
            value: 0,
        }
    }
}
</script>

<style scoped>

</style>