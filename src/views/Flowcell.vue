<template>
  <div class="flowcell">
    <div class="position">
      {{position}}
    </div>
    <draggable>
      <div class="library">
        <div class="id">
          id
        </div>
        <div class="sampleId">
          sampleId
        </div>
        <div class="name">
          name
        </div>
         <div class="species">
          species
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>

import draggable from 'vuedraggable'

export default {
  name: 'Flowcell',
  props: [
    'position'
  ],
  data () {
    return {
      library: {}
    }
  },
  methods: {
    getData () {
      return {
        position: this.position,
        id: document.getElementsByClassName('id')[0].innerHTML,
        sampleId: document.getElementsByClassName('sampleId')[0].innerHTML,
        name: document.getElementsByClassName('name')[0].innerHTML,
        species: document.getElementsByClassName('species')[0].innerHTML
      }
    }
  },
  computed: {
  },
  components: {
    draggable
  }
}

</script>

<style>
  .flowcell {
    width: 200px;
    height: 400px;
    border: 1px solid;
  }
  .library {
    margin-top: 150px;
    text-align: center;
    border: 1px solid;
    padding: 20px;
  }
</style>
