<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <Sidebar />
      <div class="col-lg-10">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>
