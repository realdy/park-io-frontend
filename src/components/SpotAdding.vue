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
            <div class="form-group">
                <label for="inputEmail">Email</label>
                <input type="text" class="form-control" id="inputEmail" placeholder="Enter your email to recieve a confirmation password" v-model="form['email']">
            </div>
            <div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>

    </div>
</template>

<script>
import axios from 'axios'
import emailjs from 'emailjs-com'

export default {
  name: 'SpotAdding',
  data () {
    return {
      msg: 'This is the spot adding page',
      form: {
        'address': '',
        'rate': 0,
        'contact': '',
        'description': '',
        'email': '',
        'password': ''
      },
      templateParams: {
        email: ' ',
        password: ' ',
        address: ' '
      }
    }
  },
  methods: {
    genPassword: function () {
      var length = 8
      var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      var retVal = ''
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n))
      }
      this.form['password'] = retVal
    },
    sendEmail: function () {
      this.genPassword()
      this.templateParams.email = this.form['email']
      this.templateParams.password = this.form['password']
      this.templateParams.address = this.form['address']
      console.log(this.templateParams)
      emailjs.send('default_service', 'services', this.templateParams, 'user_sIZcXeXbPGuyJlE7Cg2du')
        .then((result) => {
          console.log('SUCCESS!', result.status, result.text)
        }, (error) => {
          console.log('FAILED...', error)
        })
    },
    submitForm: function (submitEvent) {
      console.log(this.form)
      let targetSpot = this.form
      this.sendEmail()
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
