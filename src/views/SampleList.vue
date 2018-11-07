<template>
  <div class="samples">
    <table class="table table-striped" >
      <thead>
        <th>&nbsp;</th>
        <th>ID</th>
        <th>Name</th>
        <th>Species</th>
        <th>Status</th>
      </thead>
      <tbody>
        <sample v-for="sample in samples" v-bind:key="sample.id" v-bind="sample"></sample>

        <!--  UNcomment the below comments for collapsable example -->

        <!-- <template v-for="row in rows">
          <tr @click="toggle(row.id)" :class="{ opened: opened.includes(row.id) }">
            <td>{{ row.name }}</td>
            <td>{{ row.handle }}</td>
          </tr>
          <tr v-if="opened.includes(row.id)">
            <td colspan="2">ON!</td>
          </tr>
        </template> -->
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
      opened: [],
      // rows: [
      //   { id: 1, name: 'Bill', handle: 'bill' },
      //   { id: 2, name: 'Bob', handle: 'bob' }
      // ]
    }
  },
  components: {
    Sample
  },
  computed: {
    samples () {
      return this.$store.getters.samples.filter(sample => sample.status === 'started')
    }
  },
  methods: {
    createLibraries (event) {
      let sampleNames = []
      this.$children.filter(sample => sample.selected === true).forEach((sample) => {
        this.$store.commit('createLibrary', { id: this.$store.getters.libraryCount + 1, sampleId: sample.id, name: sample.name, species: sample.species, status: 'created' })
        sampleNames.push(sample.name)
      })
      alert(`Successful\nlibraries ${sampleNames.join(',')} have been successfully created`)
    },
    // toggle(id) {
    //   const index = this.opened.indexOf(id)
    //   if (index > -1) {
    //     this.opened.splice(index, 1)
    //   } else {
    //     this.opened.push(id)
    //   }
    // }
  }
}
</script>

<style>

/* .opened {
  background-color: blue;
} */
</style>
