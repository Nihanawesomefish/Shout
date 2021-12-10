
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
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+user_name+" ツ";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function logout(){
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
      window.location="index.html";
      }
      function addRoom(){
            room_name=document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
            purpose:"Nihan is adding the room"
            });
            localStorage.setItem("room_name",name1);
            window.location="kwitter_page.html"
              }
            function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html"
            }
      
