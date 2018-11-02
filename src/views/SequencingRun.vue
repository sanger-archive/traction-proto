<template>
  <div class="sequencing-run">
    <library-list></library-list>
      <div id="container">
        <div class="header">CHIP1234567</div>
        <div id="chip">
          <draggable>
            <div class="flowcell">
              1
              <div class="drop">
                drop
              </div>
            </div>
          </draggable>
          <draggable>
           <div class="flowcell">
            2
            <div class="drop">
              drop
            </div>
          </div>
          </draggable>
        </div>
      </div>
  </div>

</template>

<script>

import LibraryList from '@/views/LibraryList'
import draggable from 'vuedraggable'

export default {
  name: 'SequencingRun',
  data () {
    return {
    }
  },
  components: {
    LibraryList,
    draggable
  },
  methods: {
  },
  computed: {
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
    // margin: auto;
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
  .flowcell {
    width: 200px;
    height: 400px;
    border: 1px solid;
  }
  .drop {
    margin-top: 150px;
    text-align: center;
  }
</style>
