//YOUR FIREBASE LINKS
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
   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data['name'];
message=message_data['message'];
like = message_data['like']; name_with_tag = "<h4> "+ name1 +"<img class='user_tick' src='tick.png'>"; message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"; row = name_with_tag + message_with_tag +like_button + span_with_tag; document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location="index.html";
}
function send(){
message_name=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:message_name,
like:0
});
document.getElementById("msg").value="";
}
