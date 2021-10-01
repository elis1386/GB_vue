<template>
<nav class="mt-5">
  <ul class="pagination justify-content-center">
    <a class="page-link" href="#" tabindex="-1">Previous</a>
    <div class="page-item" v-for="(item, index) in pages" :key="item" @click="choosePage(index)">
    <a class="page-link" href="#"> {{ item }} </a>
    </div>
    <a class="page-link" href="#">Next</a>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['list'],
  computed: {
    pages () {
      return Math.ceil(this.list.length / 5)
    }
  },
  methods: {
    choosePage (page) {
      this.$emit('choose-page', page)
    }
  }
}
</script>

<style scoped>
.page-link {
    color: rgb(43, 43, 43);
}
</style>