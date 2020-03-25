<template>
  <div class="spotlist mt-4">
    <ul v-for="item in locations" v-bind:key="item.address">
      <li>
          <p> {{ item.address }}</p>
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
