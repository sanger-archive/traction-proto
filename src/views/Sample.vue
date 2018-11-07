<template>
  <tr>
    <td><input type="checkbox" id="checkbox" v-model="selected"></td>
    <td>{{ id }}</td>
    <td>{{ name }}</td>
    <td>{{ species }}</td>
    <td>{{ status }}</td>
  </tr>
</template>

<script>

export default {
  name: 'Sample',
  props: [
    'id',
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
    json () {
      return {
        id: this.id,
        name: this.name,
        species: this.species,
        status: this.status
      }
    }
  },
  methods: {
  }
}

</script>

<style></style>
