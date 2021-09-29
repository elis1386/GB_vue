<template>
    <div>
        <div class="container" >
        <input class="input-group mb-3" type="text" v-model="description" placeholder="payment description">
        <input class="input-group mb-3" type="text" v-model.number="amount" placeholder="payment amount">
        <input class="input-group mb-3" type="text" v-model="date" placeholder="payment date">
        <button type="button" class="btn btn-primary mb-3" @click="addNewPayment"> + Add new </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentForm',
    data(){
        return {
            description: '',
            amount: null,
            date: '',
            formVisibl: false,
        }
    },
    props: {
       list: {
           type: Array,
           default: () => []
       }
    },
    methods: {
        addNewPayment() {
            let newId = 0
            this.list.map(function(element){
                if (element.id > newId) newId = element.id;
            });
            if ((this.amount !== 0 ) && (this.date !== "") && (this.description !=="")){
            const data = {
                id: newId + 1,
                description: this.description,
                amount: this.amount,
                date: this.date,
            }        
            this.$emit('getPayment', data);
            }
        }
    }
}

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
}
.btn{
    padding: 10px;
    width: 100%;
}
.input-group {
    width: 100%;
    padding: 10px;
}
</style>





