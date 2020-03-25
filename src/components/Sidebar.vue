<template>
  <div class="col-lg-2">
    <h1>park.io</h1>
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
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
