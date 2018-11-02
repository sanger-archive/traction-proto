<template>
  <div class="samples">
    <table>
      <thead>
        <th></th>
        <th>ID</th>
        <th>Name</th>
        <th>Species</th>
        <th>State</th>
      </thead>
      <tbody>
        <sample v-for="sample in samples" v-bind:key="sample.id" v-bind="sample"></sample>
      </tbody>
    </table>
  </div>
</template>

<script>
import Sample from '@/views/Sample'

export default {
  name: 'Samples',
  data () {
    return {
      samples: []
    }
  },
  components: {
    Sample
  },
  created () {
    this.samples = Object.values(localStorage).map(s => JSON.parse(s)).filter(s => s.status === 'started')
    // let samplesIds = Object.keys(localStorage).filter(i => i !== 'loglevel:webpack-dev-server')
    // for (let id of samplesIds) {
    //   this.samples.push(JSON.parse(localStorage[id]))
    // }
  }
}
</script>

<style></style>
