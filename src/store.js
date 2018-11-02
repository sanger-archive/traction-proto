import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    samples: []
  },
  getters: {
    samples: state => {
      return state.samples
    }
  },
  mutations: {
    createSamples (state, samples) {
      state.samples = samples
    },
    startSample (state, id) {
      state.samples.find(sample => sample.id === id).status = 'started'
    }
  },
  actions: {

  }
})
