<template>
  <tr>
    <td class="id">{{ id }}</td>
    <td class="chipbarcode">{{ chipBarcode }}</td>
    <td class="sampleNames">{{ getFlowcellsSampleNames }}</td>
    <td class="species">{{ getFlowcellsSpecies }}</td>

  </tr>
</template>

<script>

export default {
  name: 'SequencingRun',
  props: [
    'id',
    'flowcells',
    'chipBarcode'
  ],
  computed: {
    getFlowcellsSampleNames () {
      return this.flowcells.map(flowcell => flowcell.name).join(',')
    },
    getFlowcellsSpecies () {
      return this.flowcells.map(flowcell => flowcell.species).join(',')
    }
  },
  components: {
  },
  methods: {
  }
}

</script>

<style></style>
