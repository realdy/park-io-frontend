<template>
  <div>
    <Map></Map>
    <SpotList></SpotList>
  </div>
</template>

<script>
import SpotList from '@/components/SpotList'
import Map from '@/components/Map'

export default {
  name: 'Home',
  components: {
    Map,
    SpotList
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
