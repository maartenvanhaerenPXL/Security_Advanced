let url = 'https://localhost:44317/api/authentication/token';
let username = document.getElementById("UserName");
let password = document.getElementById("Password");
let loginButton = document.getElementById("Login")
let error = document.getElementById("error");
let gegevens = {username: username, password: password};

loginButton.onclick = login;

function login () {

    if (username.value.length == 0) {
        error.style.visibility = "visible";
        error.value = "Het veld username is leeg";
    }
    else {
        error.style.visibility = "hidden";
        window.location = "../HTML/Index.html";
            //window.location moet weg eens de login werkt
        // fetch(url,
        //     {
        //         method: "POST",
        //         body: JSON.stringify(gegevens),
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         }
        //     })
        //
        //     .then((response) => {
        //         if (response.status == 200) {
        //             //console.log("goed");
        //             return response.json();
        //         }
        //         else {
        //
        //             error.innerHTML = "an error has occured!";
        //         }
        //
        //
        //     })
        //     .then((player) => {
        //         let token = player.token;
        //         let username = player.player.nickName;
        //         let id = player.player.id;
        //         sessionStorage.setItem("token", token);
        //         sessionStorage.setItem("username", username);
        //         sessionStorage.setItem("id", id);
        //         //console.log(token);
        //         //console.log(nickName);
        //         //console.log(sessionStorage.getItem("token"));
        //         window.location = "../HTML/Chatroom.html";
        //     })
        //     .catch((error) => {
        //         error.visibility = true;
        //         error.innerHTML = "an error has occured!";
        //     });


    }

}