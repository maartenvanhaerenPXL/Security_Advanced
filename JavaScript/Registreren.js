var username = document.getElementById("UserName");
var password = document.getElementById("Password");
var passwordcontrol = document.getElementById("PasswordControl");
var error = document.getElementById("error");

function registreren() {
    if (password != passwordcontrol){
        error.text = "Wachtwoord komt niet overeen";
    }

}

