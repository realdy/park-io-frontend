<template>
  <div class="spotlist mt-4">
    <ul v-for="item in info" v-bind:key="item.address">
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
    return {
      info: [],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    axios
      .get('https://park-io-backend.herokuapp.com/parkingspots')
      .then(response => (this.info = response.data))
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
