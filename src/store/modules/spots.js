import axios from 'axios'

// initial state
const state = {
  locations: []
}

// getters
const getters = {}

// actions
const actions = {
  getLocations (context) {
    axios
      .get('https://park-io-backend.herokuapp.com/parkingspots')
      .then(response => {
        response.data.sort(function (spot1, spot2) {
          return spot1.occupied ? 1 : -1
        })

        const locations = response.data.map((spot) => {
          return {
            ...spot,
            edit: false
          }
        })
        context.commit('setLocations', locations)
      })
  }
}

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
