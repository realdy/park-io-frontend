<template>
  <div class="spotlist mt-4">
    <ul v-for="(item, id) in locations" v-bind:key="item.address">
      <li>
          <b-button v-b-toggle="'collapse-' + id" variant="secondary">{{ item.address }}</b-button>
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
        this.$store.commit('spots/setLocations', response)
      })
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
</style>
