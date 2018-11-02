<template>
  <div class="reception">
    <table>
      <thead>
        <th></th>
        <th>ID</th>
        <th>Name</th>
        <th>Species</th>
      </thead>
      <tbody>
        <sample v-for="sample in pendingSamples" v-bind:key="sample.id" v-bind="sample"></sample>
      </tbody>
    </table>
    <div id="uploadbutton">
      <button v-on:click="upload">Upload</button>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import Sample from '@/views/Sample'

export default {
  name: 'Reception',
  data () {
    return {
      samples: []
    }
  },
  components: {
    Sample
  },
  methods: {
    upload () {
      let samplesToUpload = this.$children.filter(s => s.selected === true)
      for (let s of samplesToUpload) {
        s.status = 'started'
        localStorage.setItem(s.id, JSON.stringify(s.json))
      }
    }
  },
  computed: {
    pendingSamples () {
      return Object.values(localStorage).map(s => JSON.parse(s)).filter(s => s.status === 'pending')
    }
  },
  created () {
    axios
      .get('http://localhost:3000/samples/')
      .then(response => {
        for (let sample of response.data) {
          if (localStorage.getItem(sample.id === undefined)) {
            localStorage.setItem(sample.id, JSON.stringify(sample))
          }
        }
      }
      )
  }
}

</script>

<style lang="scss" scoped>
table {
  width: 100%;
}
</style>
