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

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>
