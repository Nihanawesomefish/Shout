var firebaseConfig = {
    apiKey: "AIzaSyAo4AlBskAXrPJ5XW33HfCy2nQFKQab9k4",
    authDomain: "social-d420f.firebaseapp.com",
    databaseURL: "https://social-d420f-default-rtdb.firebaseio.com",
    projectId: "social-d420f",
    storageBucket: "social-d420f.appspot.com",
    messagingSenderId: "503299505254",
    appId: "1:503299505254:web:041e83dc5f611be62081a7"
  };
 firebase.initializeApp(firebaseConfig);
 

u=0;
function getData() { u=0; user_name = document.getElementById("user_name").value; password = document.getElementById("pwd").value; firebase.database().ref("/"+"users").on('value', function(snapshot) { snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData; console.log(firebase_message_id); console.log(message_data); username = message_data['name']; console.log("db"+username); pwd = message_data['pwd']; if(username==user_name){ console.log("username matches"); u=1; if(pwd==password){ console.log("password matches"); u=2; document.getElementById("check").innerHTML="username and password are correct"; }else{ document.getElementById("check").innerHTML="username is correct and password is incorrect"; } } } }); }); }
function addUser() { getData(); if (u==0){ document.getElementById("check").innerHTML="username and password does not exists"; } if(u==2){ localStorage.setItem("user_name", user_name); window.location = "kwitter_room.html"; } }
function addnewUser(){ getData();
  /* firebase.database().ref("/").child("users").update({ purpose : "adding users" });*/
    firebase.database().ref("users").push({ name:user_name, pwd:password }); document.getElementById("check").innerHTML="username created"; }