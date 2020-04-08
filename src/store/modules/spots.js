// initial state
const state = {
  locations: []
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  setLocations (state, locations) {
    state.locations = locations
  },
  editSpot (state, id) {
    state.locations[id].edit = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
