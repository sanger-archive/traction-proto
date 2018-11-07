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
    <button @click="printBarcodes">Print Barcodes</button>
    <button id="deleteLibraryButton" @click="deleteLibraries">Delete Libraries</button>
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
    printBarcodes () {
      let libraries = this.$children.filter(library => library.selected).map(library => library.name)
      alert(`Printing barcodes for libraries ${libraries.join(',')}`)
    },
    deleteLibraries () {
      let librarySampleNames = []
      this.$children.filter(library => library.selected).forEach((library) => {
        this.$store.commit('deleteLibrary', library.id)
        librarySampleNames.push(library.name)
      })

      alert(`Delete libraries ${librarySampleNames.join(',')}`)
    }
  },
  created () {
  }
}

</script>

<style lang="scss" scoped>

</style>
