<template>
  <draggable @end="onEnd">
    <tr>
      <td><input type="checkbox" id="checkbox" v-model="selected"></td>
      <td class="id">{{ id }}</td>
      <td class="sampleId">{{ sampleId }}</td>
      <td class="name">{{ name }}</td>
      <td class="species">{{ species }}</td>
      <td class="status">{{ status }}</td>
    </tr>
  </draggable>
</template>

<script>

import draggable from 'vuedraggable'

export default {
  name: 'Sample',
  props: [
    'id',
    'sampleId',
    'name',
    'species',
    'status'
  ],
  data () {
    return {
      'selected': false
    }
  },
  computed: {
  },
  components: {
    draggable
  },
  methods: {
    onEnd (event, originalEvent) {
      event.explicitOriginalTarget.getElementsByClassName('id')[0].innerHTML = event.clone.getElementsByClassName('id')[0].innerHTML
      event.explicitOriginalTarget.getElementsByClassName('sampleId')[0].innerHTML = event.clone.getElementsByClassName('sampleId')[0].innerHTML
      event.explicitOriginalTarget.getElementsByClassName('name')[0].innerHTML = event.clone.getElementsByClassName('name')[0].innerHTML
      event.explicitOriginalTarget.getElementsByClassName('species')[0].innerHTML = event.clone.getElementsByClassName('species')[0].innerHTML
    }
  }
}

</script>

<style>

</style>
