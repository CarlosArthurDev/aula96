var firebaseConfig = {
    apiKey: "AIzaSyC2ClfoKv2MqRV7CnbJvH7DqRJ9mBTqQ6U",
    authDomain: "redesocial-35805.firebaseapp.com",
    databaseURL: "https://redesocial-35805-default-rtdb.firebaseio.com",
    projectId: "redesocial-35805",
    storageBucket: "redesocial-35805.appspot.com",
    messagingSenderId: "394529187199",
    appId: "1:394529187199:web:77d356515fbbb83495a64a"
  };
  
  firebase.initializeApp(firebaseConfig)
  //LINKS FIREBASE

var user = localStorage.getItem("user")
var roomName = localStorage.getItem("chave")


function msg(){
envio1=document.getElementById("envio").value;
firebase.database().ref(roomName).push({
 name:user,
 mensage:envio1,
 like:0
})
envio1=document.getElementById("envio").value="";

}





function getData() { 
     firebase.database().ref("/"+roomName).on('value', function(snapshot) { 
        document.getElementById("saida").innerHTML = ""; 
            snapshot.forEach(function(childSnapshot) { 
            childKey  = childSnapshot.key; 
            childData = childSnapshot.val(); 
            if(childKey != "purpose") {
            firebaseMessageId = childKey;
            messageData = childData;
//Início do código

//Fim do código
 } });  }); }
getData();