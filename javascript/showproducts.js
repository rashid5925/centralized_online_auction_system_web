import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, get,child } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

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
    const dbref = ref(database);
    get(child(dbref, "products/")).then((snapshot)=>{
        if(snapshot.exists()) {
            var records = snapshot.val();
            for (let index = 0; index < records.length; index++) {
                let img_name = "#img" + (index + 1);
                let title_name = "#title" + (index + 1);
                let price_name = "#price" + (index + 1);
                let date_name = "#date" + (index + 1);
                let desc_name = "#desc" + (index + 1);
                $(img_name).attr("src", records[index].image);
                $(title_name).text(records[index].name);
                $(price_name).text("Avg Price Rs. " + records[index].price);
                $(date_name).text("Start: " + records[index].startdate);
                $(desc_name).text(records[index].desc);
            }
        } else {
            alert("Cannot load page");
        }
    });
});
