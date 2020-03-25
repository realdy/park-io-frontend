// initial state
const state = {
  locations: {
    data: []
  }
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  setLocations (state, locations) {
    state.locations = locations
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
