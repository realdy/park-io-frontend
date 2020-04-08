<template>
    <div class="spot-adding">
        <h2>Add a New Spot</h2>
        <br>
        <b-form @submit.prevent="submitForm">
          <b-form-group
              label="Spot Address"
              label-for="inputAddress"
              description="eg. 912 Sybil Street, Ann Arbor, Michigan 48104, United States"
              >
              <b-form-input
              id="inputAddress"
              v-model="form.address"
              type="text"
              required
              placeholder="Enter the address of your spot"
            ></b-form-input>
          </b-form-group>
          <b-form-group
              label="Rent Rate"
              label-for="inputRate"
              >
              <b-form-input
              id="inputRate"
              v-model="form.rate"
              type="number"
              required
              placeholder="Enter your desired rent rate"
            ></b-form-input>
          </b-form-group>
          <b-form-group
              label="Contact Info"
              label-for="inputContact"
              description="eg. Venmo @apple"
              >
              <b-form-input
              id="inputContact"
              v-model="form.contact"
              type="text"
              required
              placeholder="Enter your contact info"
            ></b-form-input>
          </b-form-group>
          <b-form-group
              label="Description"
              label-for="inputDescription"
              >
              <b-form-input
              id="inputDescription"
              v-model="form.description"
              type="text"
              placeholder="Enter the description of your spot"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="success">Save</b-button>
        </b-form>
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
