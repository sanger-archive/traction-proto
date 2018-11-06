<template>
  <div class="library-list">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Sample ID</th>
          <th>Name</th>
          <th>Species</th>
        </tr>
      </thead>
      <tbody>
        <library v-for="library in libraries" v-bind:key="library.id" v-bind="library"></library>
      </tbody>
    </table>
  </div>

</template>

<script>

import Library from '@/views/Library'

export default {
  name: 'LibraryList',
  data () {
    return {
    }
  },
  computed: {
    libraries () {
      return this.$store.getters.libraries
    }
  },
  components: {
    Library
  },
  methods: {
  },
  created () {
  }
}

</script>

<style lang="scss" scoped>
</style>
