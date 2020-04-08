<template>
  <div class="col-lg-2 mb-5">
    <h1 class="mt-5">park.io</h1>
    <ul class="nav nav-pills nav-fill flex-column mt-5">
      <li class="nav-item">
        <a class="nav-link" :class="{'active': isActive === 0}" href="/" @click="navigate(0)">Available Spots</a>
      </li>
      <li class="nav-item mt-1">
        <a class="nav-link" :class="{'active': isActive === 1}" href="/#/add" @click="navigate(1)">Add a Spot</a>
      </li>
      <li class="nav-item mt-1">
        <a class="nav-link" :class="{'active': isActive === 2}" href="/#/help" @click="navigate(2)">Help</a>
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
  },
  data () {
    switch (this.$router.currentRoute.name) {
      case 'SpotAdding':
        return { isActive: 1 }
      case 'Help':
        return { isActive: 2 }
      default:
        return { isActive: 0 }
    }
  },
  methods: {
    navigate: function (active) {
      this.isActive = active
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
