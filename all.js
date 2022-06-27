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

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");


  function logout() {
    window.location = "index.html";
  }

  function send(){
    input = document.getElementById("holder").value;
    firebase.database().ref(room_name).push({
       user : user_name,
       message:input,
       like : 0
    });
    document.getElementById("holder").innerHTML = "";
  }

  function load() {
    document.getElementById("user").innerHTML = "User: " + localStorage.getItem("name");
  
  }

  