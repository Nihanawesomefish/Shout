
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAo4AlBskAXrPJ5XW33HfCy2nQFKQab9k4",
      authDomain: "social-d420f.firebaseapp.com",
      databaseURL: "https://social-d420f-default-rtdb.firebaseio.com",
      projectId: "social-d420f",
      storageBucket: "social-d420f.appspot.com",
      messagingSenderId: "503299505254",
      appId: "1:503299505254:web:041e83dc5f611be62081a7"
    };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout(){
      user_name=document.getElementById("user_name").value;
      localStorage.setItem("user_name", user_name);
      window.location="index.html";
      }
      function addRoom(){
            user_name=document.getElementById("room_name").value;
            firebase.database().ref("/").childKey(room_name).update({
            purpose:"Nihan is adding the room"
            });
              }
              var app = initializeApp(firebaseConfig);
      