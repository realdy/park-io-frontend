<template>
    <div class="spot-adding">
        <h2>Add a New Spot</h2>
        <br>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="inputAddress">Spot Address</label>
                <input type="text" class="form-control" id="inputAddress" aria-describedby="addressHelp" placeholder="Enter your spot's address" v-model="form['address']">
                <small id="addressHelp" class="form-text text-muted">eg. 912 Sybil Street, Ann Arbor, Michigan 48104, United States</small>
            </div>
            <div class="form-group">
                <label for="inputRate">Rent Rate</label>
                <input type="number" class="form-control" id="inputRate" placeholder="Enter your desired rent rate" v-model.number="form['rate']">
            </div>
            <div class="form-group">
                <label for="inputContact">Contact Info</label>
                <input type="text" class="form-control" id="inputContact" aria-describedby="contactHelp" placeholder="Enter your contact info" v-model="form['contact']">
                <small id="contactHelp" class="form-text text-muted">eg. Venmo @apple</small>
            </div>
            <div class="form-group">
                <label for="inputDescription">Description</label>
                <input type="text" class="form-control" id="inputDescription" placeholder="Enter your description to your spot" v-model="form['description']">
            </div>
            <div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>

    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SpotAdding',
  data () {
    return {
      msg: 'This is the spot adding page',
      form: {
        'address': '',
        'rate': 0,
        'contact': '',
        'description': ''
      }
    }
  },
  methods: {
    submitForm: function (submitEvent) {
      console.log(this.form)
      let targetSpot = this.form
      axios
        .post(
          'https://park-io-backend.herokuapp.com/parkingspots/',
          targetSpot,
          {'headers': {'Content-Type': 'application/json'}}
        )
        .then(response => {
          console.log(response.status)
          this.$router.push('/')
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
.spot-adding {
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
