<template>
  <div class="spotlist mt-4">
    <h2>Spot List</h2>
    <br>
    <ul v-for="(item, id) in locations" v-bind:key="item.address">
      <li>
          <b-button v-b-toggle="'collapse-' + id" variant="success" :class="{'btn-danger': item.occupied}">{{ item.address }}</b-button>
          <b-collapse v-bind:id="'collapse-' + id" class="mt-2">
            <b-card>
              <p class="card-text">
                <strong>Address:</strong> {{item.address}}
                <br>
                <strong>Rate:</strong> ${{item.rate}}
                <br>
                <strong>Contact Info:</strong> {{item.contact}}
                <br>
                <strong>Description:</strong> {{item.description}}
                <br>
                <label>
                  <input type="checkbox" v-model="item.occupied" @change="updateOccupation(id)">
                  <span class="lever"></span> Occupied
                </label>
              </p>
            </b-card>
          </b-collapse>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SpotList',
  data () {
    return {}
  },
  computed: {
    locations () {
      return this.$store.state.spots.locations.data
    }
  },
  mounted () {
    axios
      .get('https://park-io-backend.herokuapp.com/parkingspots')
      .then(response => {
        // let freeSpots = []
        // let occupiedSpots = []
        console.log(response)
        response.data.sort(function (spot1, spot2) {
          return spot1.occupied ? 1 : -1
        })
        this.$store.commit('spots/setLocations', response)
      })
  },
  methods: {
    updateOccupation: function (id) {
      let targetSpot = this.$store.state.spots.locations.data[id]
      axios
        .put(
          targetSpot.url,
          targetSpot,
          {'headers': {'Content-Type': 'application/json'}}
        )
        .then(response => {
          console.log(response.status)
        })
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h2 {
  border-bottom-style: solid;
  border-width: 1px;
  padding-bottom: 5px
}
</style>
