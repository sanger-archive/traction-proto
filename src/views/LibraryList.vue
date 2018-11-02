<template>
  <div class="library-list">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Species</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="library in libraries" v-bind:key="library.id">
            <td>
              <draggable v-model="libraries" @start="drag=true" @end="onEnd" >
                <div>{{ library.name}}</div>
              </draggable>
            </td>
            <td>{{ library.species }}</td>
          </tr>
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
      event.explicitOriginalTarget.innerHTML = event.clone.innerHTML
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
  .library-list {
    margin-left: 200px;
    width: 300px;
  }
</style>
