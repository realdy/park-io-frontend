<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD6tG3QTYS_H_l5DMvNRgdwIT0hqwnuI4s",
    authDomain: "park-io-3cdfd.firebaseapp.com",
    databaseURL: "https://park-io-3cdfd.firebaseio.com",
    projectId: "park-io-3cdfd",
    storageBucket: "park-io-3cdfd.appspot.com",
    messagingSenderId: "465596350285",
    appId: "1:465596350285:web:1fd3b9a2ccdc803be40104"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var provider = fireBase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
    }
    // The signed-in user info.
    var user = result.user;
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
</script>

<template>
    <div class="help">
        <h2>Login with Google</h2>
        <div id="detail">
            <br>
            --Place Holder--
            FireBase info in actual code
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
