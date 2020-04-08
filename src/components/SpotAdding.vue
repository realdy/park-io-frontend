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
           <b-form-group
              label="Email"
              label-for="inputEmail"
              >
              <b-form-input
              id="inputEmail"
              v-model="form.email"
              type="text"
              placeholder="Enter your email to recieve a confirmation password"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="success">Save</b-button>
        </b-form>
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
