let url = 'https://localhost:44317/api/authentication/register' ;
let username = document.getElementById("UserName");
let password = document.getElementById("Password");
let passwordcontrol = document.getElementById("PasswordControl");
let error = document.getElementById("error");

function registreren () {
    if (username.value.length == 0 && password.value != passwordcontrol.value){
        error.style.visibility = "visible";
        error.value = "Het veld username is leeg \n en de wachtwoorden komen niet overeen"
    }
    else if (username.value.length == 0) {
        error.style.visibility = "visible";
        error.value = "Het veld username is leeg"
    }else if (password.value != passwordcontrol.value){
        error.style.visibility = "visible";
        error.value = "\n Wachtwoorden komen niet overeen"
    }
    else {
        error.style.visibility = "hidden";
        window.location = "../HTML/Login.html"
        // windows moet weg eens er met de fetch hieronder gewerkt wordt
    }
    let gegevens = {username: username,password: password};
    // fetch(url,
    //     {
    //         method: "POST",
    //         body:  JSON.stringify(gegevens),
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //
    //     .then((response) => {
    //         if (response.status == 200) {
    //             console.log("goed");
    //             window.location = "../HTML/Login.html";
    //         }
    //         else {
    //
    //             errormessage.innerHTML = "an error has occured!";
    //         }
    //
    //     })
    //     .catch( (error) => {
    //         errormessage.innerHTML ="an error has occured!"
    //     } );
}




