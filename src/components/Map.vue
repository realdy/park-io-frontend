<template>
    <div class="map">
        <MglMap :accessToken="accessToken" :mapStyle.sync="mapStyle" :zoom=12 :center="[location.lon, location.lat]">
        <MglMarker v-for="coord in coordinates"
            v-bind:key="coord"
            :coordinates="coord"
            color='blue'
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
      coordinates: [[-83.7291924, 42.2731526], [-83.7455718, 42.2704053]],
      location: {
        lon: -83.7287936,
        lat: 42.2739968
      }
    }
  },

  created () {
    this.mapbox = Mapbox
    var obj = this
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
    height: 500px;
}
</style>
