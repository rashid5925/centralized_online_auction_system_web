import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-xIKydv5eyzMgA7rrcTnUlQbhMtGDf5c",
  authDomain: "auctions-3126d.firebaseapp.com",
  databaseURL: "https://auctions-3126d-default-rtdb.firebaseio.com",
  projectId: "auctions-3126d",
  storageBucket: "auctions-3126d.appspot.com",
  messagingSenderId: "213956771643",
  appId: "1:213956771643:web:60a18b7c7f6e950da8811e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

loginbtn.addEventListener('click', (e) => { 
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href = "/products.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Invalid Credentials");
  });
});
