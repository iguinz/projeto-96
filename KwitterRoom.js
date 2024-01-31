function addRoom()
{
    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
roomNames = childKey;
//Início do código
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");
var x = localStorage.getItem("mytime");
//Fim do código
});});}
getData();
}

function logout() {
    window.location.href = "index.html";
}

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        name:userName,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";

}

var username = localStorage.getItem("username");
var roomName = localStorage.getItem("roomName");
