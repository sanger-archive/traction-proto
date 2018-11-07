<template>
  <div class="builf-sequencing-run">
    <library-list></library-list>
    <div id="container">
      <div id="chipbarcode">CHIP1234567</div>
      <div id="chip">
        <flowcell v-bind:position="1"></flowcell>
        <flowcell v-bind:position="2"></flowcell>
      </div>
      <div>
        <button @click="createSequencingRun">Create</button>
      </div>
    </div>
  </div>

</template>

<script>

import LibraryList from '@/views/LibraryList'
import draggable from 'vuedraggable'
import Flowcell from '@/views/Flowcell'

export default {
  name: 'BuildSequencingRun',
  data () {
    return {
    }
  },
  components: {
    LibraryList,
    draggable,
    Flowcell
  },
  methods: {
    createSequencingRun () {
      let flowcells = [this.$children[1], this.$children[2]]

      let data = flowcells.map(flowcell => flowcell.getData())
      let chipBarcode = document.getElementById('chipbarcode').innerHTML
      this.$store.commit('createSequencingRun', { flowcells: data, chipBarcode: chipBarcode })

      alert('Sequencing run successfully created.')
    }
  },
  computed: {
    samples () {
      return this.$store.getters.libraries
    }
  },
  created () {
  }
}

</script>

<style lang="scss" scoped>
  #chipbarcode {
    width: 100%;
    text-align: left;
  }
  #container {
    width: 450px;
    height: 450px;
    position: absolute;
    top: 75px;
    left: 900px;
  }
  #chip {
    display: flex;
    flex-direction: row;
    border: 1px solid;
    width: 400px;
    height: 400px;
    justify-content: center;
    align-items: center;
  }
  .library-list {
    margin-left: 200px;
    width: 300px;
  }
</style>
