function addUser(){

    var user=document.getElementById("nameInput").value;
    localStorage.setItem("user",user);
    window.location="kwitter_room.html";
    }
    