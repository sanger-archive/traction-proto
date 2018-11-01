<template>
  <tr>
    <td><input type="checkbox" id="checkbox" v-model="selected"></td>
    <td>{{ id }}</td>
    <td>{{ name }}</td>
    <td>{{ species }}</td>
  </tr>
</template>

<script>

export default {
  name: 'Sample',
  props: [
    'id',
    'name',
    'species'
  ],
  data () {
    return {
      'selected': false,
      'state': 'started'
    }
  },
  computed: {
    json () {
      return {
        id: this.id,
        name: this.name,
        species: this.species,
        state: this.state
      }
    }
  }
}

</script>

<style></style>
