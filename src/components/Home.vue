<template>
  <div class="home">
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
