let message = document.getElementById("Message");
let deleteButton = document.getElementById("Delete");
let chatroomOf = document.getElementById("Chatroom")
let welkom = document.getElementById("Welkom");
let sendButton = document.getElementById("Send")
//hardcoded users
let userA = "user1";
let userB = "user2";
//
chatroomOf.innerHTML += userA;
welkom.innerHTML += userB;

deleteButton.onclick = deleteFunction;

function deleteFunction() {
    message.value = "";
}

sendButton.onclick = sendFunction;

function sendFunction() {
    console.log(message.value);
}