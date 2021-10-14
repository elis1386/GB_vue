<template>
<nav class="mt-5">
    <!-- <template> -->
        <ul class="pagination justify-content-center">
         <a class="page-link" href="#" tabindex="-1">Previous</a>
         <div class="page-item" v-for="(item, index) in pages" :key="item" @click="choosePage(index)">
            <a class="page-link" href="#"> {{ item }} </a>
         </div>
            <a class="page-link" href="#">Next</a>
        </ul>
    <!-- </template> -->
    <!-- <div @click="clickHandler(index)" v-for="(item,index) in makeArray" :key="index">
    </div> -->
</nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Pagination',
  props: ['list'],
  computed: {
    ...mapState(['newList', 'newList2']),
    makeArray () {
      return this.newList
    },
    pages () {
      return this.newList2.length ? Math.ceil(this.newList2.length / 5) : 1
    }
  },
  methods: {
    ...mapMutations(['setformDataNewList']),
    choosePage (page) {
      this.$emit('choose-page', page)
    },
    clickHandler (page) {
      this.setformDataNewList(this.newList[page])
    }
  }
}
</script>

<style scoped>
.page-link {
    color: rgb(43, 43, 43);
}
</style>