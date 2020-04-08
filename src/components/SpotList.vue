<template>
  <div class="spotlist mt-4">
    <h2>Spot List</h2>
    <br>
    <ul v-for="(item, id) in locations" v-bind:key="item.url">
      <li>
          <b-button v-b-toggle="'collapse-' + id" variant="success" :class="{'btn-danger': item.occupied}">{{ item.address }}</b-button>
          <b-collapse v-bind:id="'collapse-' + id" class="mt-2">
            <b-card no-body>
              <b-list-group v-if="!item.edit" flush>
                <b-list-group-item><strong>Address:</strong> {{item.address}}</b-list-group-item>
                <b-list-group-item><strong>Rate:</strong> ${{item.rate}}</b-list-group-item>
                <b-list-group-item><strong>Contact Info:</strong> {{item.contact}}</b-list-group-item>
                <b-list-group-item><strong>Description:</strong> {{item.description}}</b-list-group-item>
              </b-list-group>
              <b-card-body>
                <b-form v-if="item.edit">
                  <b-form-group
                      label="Spot Address"
                      label-for="inputAddress"
                      description="eg. 912 Sybil Street, Ann Arbor, Michigan 48104, United States"
                      >
                      <b-form-input
                      id="inputAddress"
                      v-model="item.address"
                      type="text"
                      required
                      placeholder="Enter the address of your spot"
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
                <b-button class="btn-danger" @click="deleteSpot(id)">Delete</b-button>
                <b-button v-if="item.edit" @click="saveSpot(id)" type="submit" variant="success">Save</b-button>
                <b-button v-else @click="editSpot(id)">Edit</b-button>
                <b-button @click="updateOccupation(id)" variant="primary">{{item.occupied ? 'Release Spot' : 'Reserve Spot'}}</b-button>
              </b-card-body>
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
      this.$store.commit('spots/updateOccupation', id)
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
