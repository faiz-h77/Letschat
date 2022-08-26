const firebaseConfig = {
    apiKey: "AIzaSyCCOj5fkw9wS_j1KuJ5qZknHSG6qSL9eig",
    authDomain: "chat-ec584.firebaseapp.com",
    databaseURL: "https://chat-ec584-default-rtdb.firebaseio.com",
    projectId: "chat-ec584",
    storageBucket: "chat-ec584.appspot.com",
    messagingSenderId: "500792118796",
    appId: "1:500792118796:web:e576c35dccf62eb8d86829",
    measurementId: "G-3CHE2CK1V9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  



user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "index3.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "index3.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
