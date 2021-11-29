function addUser(){
user_name=document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);
window.location="kwitter_room.html";
}
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
  