<template>
    <div class="map">
        <MglMap :accessToken="accessToken" :mapStyle.sync="mapStyle" :zoom=14 :center="[location.lon, location.lat]">
        <MglMarker v-for="spot in spots"
            v-bind:key="spot.coord[0] + spot.coord[1]"
            :coordinates="spot.coord"
            :color="spot.color"
            />
        </MglMap>
    </div>
</template>

<script>
import Mapbox from 'mapbox-gl'
import { MglMap, MglMarker } from 'vue-mapbox/dist/vue-mapbox.umd.js'

export default {
  components: {
    MglMap,
    MglMarker
  },
  data () {
    return {
      accessToken: 'pk.eyJ1IjoicHJhdGlrdmFpZHlhIiwiYSI6ImNrODZ2NzM1MDBpYXAzbm1ydDJyZm00dW0ifQ.B_iyhQhsrVLYbMMxLTNQ8Q', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/streets-v11', // your map style
      location: { // default current location
        lon: -83.7287936,
        lat: 42.2739968
      }
    }
  },
  computed: {
    spots () {
      return this.$store.state.spots.locations.map(item => {
        return {
          coord: [item.lat, item.lon],
          color: item.occupied ? '#bd2130' : '#1e7e34'
        }
      })
    }
  },
  created () {
    this.mapbox = Mapbox
    window.test = this
    const obj = this
    navigator.geolocation.getCurrentPosition(function (location) {
      obj.location.lat = location.coords.latitude
      obj.location.lon = location.coords.longitude
    })
  }
}
</script>

<style>
@import url("https://api.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css");
@import url("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v2.2.0/mapbox-gl-geocoder.css");
.mapboxgl-canvas {
    max-height: 75vh;
    width: 100%;
}
</style>
