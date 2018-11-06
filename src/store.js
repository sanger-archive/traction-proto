import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    samples: [],
    libraries: []
  },
  getters: {
    samples: state => {
      return state.samples
    },
    libraries: state => {
      return state.libraries
    },
    libraryCount: state => {
      return state.libraries.length
    },
    sequencingRuns: state => {
      return state.sequencingRuns
    }
  },
  mutations: {
    createSamples (state, samples) {
      state.samples = samples
    },
    startSample (state, id) {
      state.samples.find(sample => sample.id === id).status = 'started'
    },
    createLibrary (state, library) {
      state.libraries.push(library)
    },
    createSequencingRun (state, flowcells) {
      state.sequencingRuns.push({id: state.sequencingRuns.length + 1, flowcells: flowcells})
    }
  },
  actions: {

  }
})
