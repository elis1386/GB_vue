import Vue from "vue"

export default {
    install (Vue){
        if (this.installed){
            return
        }

        Vue.prototype.$keks = {
            EventBus: new Vue(),

           hello () {
               console.log("hello")
               this.EventBus.$emit('hello')
           } ,
           bye () {
            console.log("Bye")
            this.EventBus.$emit('Bye')
        } 
        }
    }
}