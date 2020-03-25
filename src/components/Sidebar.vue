<template>
  <div class="col-lg-2 mb-5">
    <h1 class="mt-5">park.io</h1>
    <ul class="nav nav-pills nav-fill flex-column mt-5">
      <li class="nav-item">
        <a class="nav-link active" href="#">Available Spots</a>
      </li>
      <li class="nav-item mt-1">
        <a class="nav-link" href="#">Add Spot</a>
      </li>
      <li class="nav-item mt-1">
        <a class="nav-link" href="#">Help</a>
      </li>
    </ul>
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
