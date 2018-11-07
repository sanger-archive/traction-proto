import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    samples: [],
    libraries: [],
    sequencingRuns: []
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
    deleteLibrary (state, id) {
      let library = state.libraries.find(library => library.id === id)
      let index = state.libraries.indexOf(library)
      state.libraries.splice(index, 1)
    },
    createSequencingRun (state, data) {
      state.sequencingRuns.push({ id: state.sequencingRuns.length + 1, ...data })
    }
  },
  actions: {

  }
})
