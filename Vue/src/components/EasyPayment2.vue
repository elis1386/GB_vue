<template>
    <div>
        <div class="container links">
            <div v-for="item in list" :key="item.discription" class="links_btn" @click="linkHandler(item)">
                {{item.discription}}:{{item.params.amount}}
            </div>
        </div>
    </div>
</template>

<script>
import {fastBtns} from '../assets/selects'
export default {
    name: 'EasyPayment2',
    computed: {
        list(){
            return fastBtns
        }
    },
    methods: {
        linkHandler(item) {
            const { discription: name,params } = item
            if(this.$route.name !== name){
                this.$router.push({discription, params})
            }
        }
    }
}

</script>

<style  scoped>

</style>