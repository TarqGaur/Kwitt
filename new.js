var firebaseConfig = {
  apiKey: "AIzaSyDZtAthZFc6G0-1xR2Y9IdFYYSibCdQyGk",
  authDomain: "practise-a98e5.firebaseapp.com",
  databaseURL: "https://practise-a98e5-default-rtdb.firebaseio.com",
  projectId: "practise-a98e5",
  storageBucket: "practise-a98e5.appspot.com",
  messagingSenderId: "1061419762652",
  appId: "1:1061419762652:web:baa01bb7045974dc430519"
};
firebase.initializeApp(firebaseConfig);

function load() {
  document.getElementById("user").innerHTML = "User: " + localStorage.getItem("name");

}

function logout() {
  window.location = "index.html";
}

function add_room() {

  var room_name = document.getElementById("input").value;
  localStorage.setItem("room_name", room_name);
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room nameee"
  });
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("index").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;


      row = "<div class='room_name' id=" + Room_names + " onclick='redirect(this.id)'>#" + Room_names + "</div>";
      document.getElementById("index").innerHTML += row;
                                                  
                                                                                                                 
    });
  });
}
getData();

function redirect(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "newwwwwwwwwwwwwwwwwwwwwwwwwww.html";
}
