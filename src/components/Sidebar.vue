<template>
  <div class="sidebar">
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
.sidebar {
    float:left;
    width: 20%;
    position: fixed;
}
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
