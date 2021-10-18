<template>
    <div>
            <a v-for="item in list" :key="item.description" class="links_btn" @click="linkHandler(item)">
                {{item.description}}:{{item.params.amount}}
            </a>
    </div>
</template>

<script>
import {fastBtns} from '../assets/selects'
export default {
    name: 'FastPay',
    computed: {
        list(){
            return fastBtns
        }
    },
    methods: {
        linkHandler(item) {
            const { description: name, params} = item
            if(this.$route.name !== name){
                this.$router.push({name, params})
            }
           console.log(item)
        },
    }
}

</script>

<style  scoped>
.links_btn {
    display: flex;
    text-decoration: none;
    color: rgb(70, 69, 69);
    padding: 3px;
    margin: 5px;

}
.links_btn:hover{
    border: 1px solid seagreen ;
    color: seagreen;
}
</style>