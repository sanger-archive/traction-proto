<template>
  <div class="sequencing-runs">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Run ID</th>
          <th>Chip Barcode</th>
          <th>Sample Names</th>
          <th>Species</th>
        </tr>
      </thead>
      <tbody>
        <sequencing-run v-for="run in sequencingRuns" v-bind:key="run.id" v-bind="run"></sequencing-run>
      </tbody>
    </table>
    <div>
      <router-link to="/build-sequencing-run" tag="button">Build Sequencing Run</router-link>
    </div>
  </div>

</template>

<script>
import SequencingRun from '@/views/SequencingRun'

export default {
  name: 'SequencingRunList',
  data () {
    return {
    }
  },
  computed: {
    sequencingRuns () {
      return this.$store.getters.sequencingRuns
    }
  },
  components: {
    SequencingRun
  },
  methods: {
  },
  created () {
  }
}

</script>

<style lang="scss" scoped>
</style>
