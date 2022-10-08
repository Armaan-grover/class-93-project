function send() {
    firebase.database().ref(roomName).push({
        name: userName,
        message: msg,
        like: 0
    })
}
function logoutUser() {
    localStorage.removeItem("roomName")
    localStorage.removeItem("user")
    window.location = "kwitter.html"
}
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
function getData() {
    console.log("hello")
    firebase.database().ref("/" + roomName).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebaseMessageId = childKey;
                      messageData = childData;
                      console.log(firebaseMessageId)
                      console.log(messageData)
                      var name = messageData["name"]
                      var message = messageData["message"]
                      var likes = messageData["like"]
                      console.log(message)
                      nameWithTag = "<h4>" + name + "<img src='tick.png' class='user_tick'></h4>"
                      messageWithTag = "<h4 class='message_h4'>" + message + "</h4>"
                      console.log(messageWithTag)
                      likeButton = "<button class='btn btn-warning' id='" + firebaseMessageId + "' onclick='updateLikes(this.id)' value=" + likes + ">"
                      spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>" + likes + "</span></button><hr>"
                      var row = nameWithTag + messageWithTag + likeButton + spanWithTag
                      document.getElementById("output").innerHTML += row;
                }

          });
    });
}

function updateLikes(messageId){
    btnLikes = Number(btnLikes) + 1
    firebase.database().ref(roomName).child(messageId).update({
          like: btnLikes

})
}
getData();

function sendMessage() {
    var message = document.getElementById("messageInput").value
    firebase.database().ref(roomName).push({
          name: userName,
          message: message,
          like: 0
    }
    )
    document.getElementById("messageInput").value = ""
}