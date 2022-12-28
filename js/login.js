$(function() {


});



function errorMessage() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var message = document.getElementById("message");
    var p = document.getElementById("password");
    if (username.value == "" || password.value == "") {
        message.innerHTML = "Please fill out the Fields!";
        return false;
    }
    if (username.value[0] == " " || password.value[0] == " ") {
        message.innerHTML = "Incorrect Login Details!";
        return false;
    }
}

function userName() {
    message.innerHTML = "";
}

function pwd() {
    message.innerHTML = "";
}