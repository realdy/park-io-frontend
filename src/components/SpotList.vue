<template>
  <div class="spotlist mt-4">
    <h2>Spot List</h2>
    <br>
    <ul v-for="(item, id) in locations" v-bind:key="item.url">
      <li>
          <b-button v-b-toggle="'collapse-' + id" variant="success" :class="{'btn-danger': item.occupied}">{{ item.address }}</b-button>
          <b-collapse v-bind:id="'collapse-' + id" class="mt-2">
            <b-card>
              <b-form v-if="item.edit">
                <b-form-group
                    label="Spot Address"
                    label-for="inputAddress"
                    description="eg. 912 Sybil Street, Ann Arbor, Michigan 48104, United States"
                    >
                    <b-form-input
                    id="inputAddress"
                    v-model="locations[id].address"
                    type="text"
                    required
                    placeholder="Enter your spot's address"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Rent Rate"
                    label-for="inputRate"
                    >
                    <b-form-input
                    id="inputRate"
                    v-model="item.rate"
                    type="number"
                    required
                    placeholder="Enter your desired rent rate"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Contact Info"
                    label-for="inputContact"
                    description="eg. Venmo @apple"
                    >
                    <b-form-input
                    id="inputContact"
                    v-model="item.contact"
                    type="text"
                    required
                    placeholder="Enter your contact info"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Description"
                    label-for="inputDescription"
                    >
                    <b-form-input
                    id="inputDescription"
                    v-model="item.description"
                    type="text"
                    placeholder="Enter the description of your spot"
                  ></b-form-input>
                </b-form-group>
              </b-form>
              <p v-else class="card-text">
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
                <br>
              </p>
              <b-button v-if="item.edit" @click="saveSpot(id)" type="submit" class="btn-success">Save</b-button>
              <b-button v-else @click="editSpot(id)">Edit</b-button>
              <b-button class="btn-danger" @click="deleteSpot(id)">Delete</b-button>
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
      return this.$store.state.spots.locations
    }
  },
  mounted () {
    axios
      .get('https://park-io-backend.herokuapp.com/parkingspots')
      .then(response => {
        response.data.sort(function (spot1, spot2) {
          return spot1.occupied ? 1 : -1
        })

        let locations = response.data.map((spot) => {
          return {
            ...spot,
            edit: false
          }
        })
        this.$store.commit('spots/setLocations', locations)
      })
  },
  methods: {
    updateOccupation: function (id) {
      let targetSpot = this.$store.state.spots.locations[id]
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
    deleteSpot: function (id) {
      let targetSpot = this.$store.state.spots.locations[id]
      axios
        .delete(targetSpot.url)
        .then(response => {
          console.log(response.status)
          this.$store.state.spots.locations.splice(id, 1)
        })
        .catch(error => console.log(error))
    },
    editSpot: function (id) {
      this.$store.commit('spots/editSpot', id)
    },
    saveSpot: function (id) {
      const targetSpot = this.locations[id]
      axios
        .put(
          targetSpot.url,
          targetSpot,
          {'headers': {'Content-Type': 'application/json'}}
        )
        .then(response => {
          targetSpot.edit = false
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
