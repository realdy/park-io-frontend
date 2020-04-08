<template>
    <div class="help">
        <h2>Help Page</h2>
        <div id="detail">
            <br>
            Park.IO is a web app that allows users to successfully navigate the
            winter conditions of Michigan by identifying parking spots that are
            accessible, available, and close to their desired destinations. The
            application allows renters to add available spots for the public to
            view. Parkers will then be able to reserve individual parking spots
            for a fixed or varibale time period (at different rates).
        </div>
    </div>
</template>

<script>
export default {
  name: 'Help',
  data () {
    return {
      msg: 'This is the help page'
    }
  }
}
</script>

<style scoped>
.help {
  width: 600px;
  margin: 50px;
  font-size: 20px
}
h2 {
  border-bottom-style: solid;
  border-width: 1px;
  padding-bottom: 5px
}
</style>
