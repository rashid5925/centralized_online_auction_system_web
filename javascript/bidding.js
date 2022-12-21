import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, ref, get,child } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

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
const database = getDatabase(app);

$(document).ready(function() {
    var id = window.location.search.substring(1).split("=")[1];
    const dbref = ref(database);
    get(child(dbref, "products/")).then((snapshot)=>{
        if(snapshot.exists()) {
            var records = snapshot.val();
            $("#prod-img").attr("src", records[id].image);
            $("#title").text(records[id].name);
            $("#endtime").text("End: " + records[id].endtime);
            $("#desc").text(records[id].desc);
        } else {
            alert("Cannot load page");
        }
    });
});