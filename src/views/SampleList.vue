<template>
  <div class="samples">
    <table>
      <thead>
        <th></th>
        <th>ID</th>
        <th>Name</th>
        <th>Species</th>
        <th>State</th>
      </thead>
      <tbody>
        <sample v-for="sample in samples" v-bind:key="sample.id" v-bind="sample"></sample>
      </tbody>
    </table>
     <div id="createLibraries">
      <button v-on:click="createLibraries">Create Libraries</button>
    </div>
  </div>
</template>

<script>
import Sample from '@/views/Sample'

export default {
  name: 'Samples',
  data () {
    return {
    }
  },
  components: {
    Sample
  },
  computed: {
    samples () {
      return this.$store.getters.samples
    }
  },
  methods: {
    createLibraries (event) {
      this.$children.filter(sample => sample.selected === true).forEach((sample) => {
        this.$store.commit('createLibrary', { id: this.$store.getters.libraryCount+1, sampleId: sample.id, name: sample.name, species: sample.species, status: 'created' })
      })
    }
  }
}
</script>

<style></style>
