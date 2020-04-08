import axios from 'axios'

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
  updateOccupation (state, id) {
    let targetSpot = state.locations[id]
    targetSpot.occupied = !targetSpot.occupied
    axios
      .put(
        targetSpot.url,
        targetSpot,
        {'headers': {'Content-Type': 'application/json'}}
      )
      .then(response => {
        console.log(response.status)
      })
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
