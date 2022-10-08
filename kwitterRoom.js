const firebaseConfig = {
  apiKey: "AIzaSyDngcqolSMbiLXwf7YPYyCjlHNqR6sOt-A",
  authDomain: "chattr-beta.firebaseapp.com",
  projectId: "chattr-beta",
  storageBucket: "chattr-beta.appspot.com",
  messagingSenderId: "329528277434",
  appId: "1:329528277434:web:c741fa5b20123f811e8583",
  measurementId: "G-5M7BR93YZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
var userName = localStorage.getItem("user")
var roomName = localStorage.getItem("roomName")

function addRoom() {
  var roomName = document.getElementById("roomName").value
  localStorage.setItem("roomName", roomName)
  firebase.database().ref("/").child(roomName).update({
    purpose: "adding room name"
  }


  
  )}
  window.location = "kwitterRoom.html"
  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        roomName = childKey;
        console.log(roomName)
        var row = "<div class='room_name' id='" + roomName + "' onclick='redirectToRoom(this.id)'>!" + roomNames + "</div><hr>"
        document.getElementById("output").innerHTML += row

      });
    });
  }

  

  getData();
  function redirectToRoom(name) {
    console.log(name)
    localStorage.setItem("roomName", name)
    window.location = "kwitter_page.html"
  }
  function logoutUser(){
    localStorage.removeItem("roomName")
    localStorage.removeItem("user")
    window.location = "kwitter.html"
  }
    
  