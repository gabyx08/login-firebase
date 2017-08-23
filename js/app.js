// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDkxtywDXC5oT38iAmfPzXZNnZpEx4AEfs",
    authDomain: "pre-talent.firebaseapp.com",
    databaseURL: "https://pre-talent.firebaseio.com",
    projectId: "pre-talent",
    storageBucket: "pre-talent.appspot.com",
    messagingSenderId: "543320077966"
  };
  firebase.initializeApp(config);

var login = function(provider){
		firebase.auth().signInWithPopup(provider).then(function(result) {
		  var token = result.credential.accessToken;
		  var user = result.user;
		  console.log("user",user);
		  console.log(user.displayName)
		  localStorage.setItem('user', user.displayName);
		  document.getElementById("usuario").textContent = localStorage.getItem("user");
		}).catch(function(error) {
		  var errorMessage = error.message;
		  console.log("error",errorMessage);
		});
};

var loginFB = function(){
	var provider = new firebase.auth.FacebookAuthProvider();
	login(provider);
};

var loginGoogle = function(){
	var provider = new firebase.auth.GoogleAuthProvider();
	login(provider);
}

var loginTwitter = function(){
	var provider = new firebase.auth.TwitterAuthProvider();
	login(provider);
}

var facebook= document.getElementById("facebook");
facebook.addEventListener("click", loginFB);

var google = document.getElementById("google");
google.addEventListener("click", loginGoogle);

var twitter = document.getElementById("twitter");
twitter.addEventListener("click", loginTwitter);