<template>
  <div class="sequencing-run">
    <library-list></library-list>
      <div id="container">
        <div class="header">CHIP1234567</div>
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
  name: 'SequencingRun',
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
  .header {
    width: 100%;
    text-align: left;
  }
  #container {
    width: 450px;
    height: 450px;
    position: absolute;
    top: 75px;
    left: 700px;
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
