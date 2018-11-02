<template>
  <div class="library-list">
    <table>
      <thead>
        <th>Name</th>
        <th>Species</th>
      </thead>
      <tbody>
        <draggable v-model="libraries" @start="drag=true" @end="onEnd" >
           <tr v-for="library in libraries" v-bind:key="library.id">
            <td>{{ library.name}}</td>
            <td>{{ library.species}}</td>
          </tr>
        </draggable>
      </tbody>
    </table>
  </div>

</template>

<script>

import axios from 'axios'
import draggable from 'vuedraggable'

export default {
  name: 'LibraryList',
  data () {
    return {
      libraries: []
    }
  },
  components: {
    draggable
  },
  methods: {
    moveLibraries (event) {
      console.log(event)
    },
    onEnd (event, originalEvent) {
      event.explicitOriginalTarget.innerHTML = event.clone.firstChild.innerHTML
    }
  },
  computed: {
  
  },
  created () {
    axios
      .get('http://localhost:3000/libraries/')
      .then(response => {
        this.libraries = response.data
        }
      )
  }
}

</script>

<style lang="scss" scoped>
</style>
