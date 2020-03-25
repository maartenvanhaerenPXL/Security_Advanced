let message = document.getElementById("Message");
let deleteButton = document.getElementById("Delete");
let chatroomOf = document.getElementById("Chatroom")
let welkom = document.getElementById("Welkom");
let sendButton = document.getElementById("Send")
let table = document.getElementById("messageTable");
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
function sendMessage(toAddMassage) {
    let tr = document.createElement("tr");
    let tdEmpty = document.createElement("td");
    let tdMessage = document.createElement("td");
    let messageBox = document.createElement("span");
    messageBox.innerHTML = toAddMassage;
    messageBox.id = "sendedMessage";
    tdMessage.id = "messageBox";
    tdMessage.appendChild(messageBox)
    tr.appendChild(tdEmpty);
    tr.appendChild(tdMessage);
    table.appendChild(tr);
    console.log(table);


}

sendButton.onclick = sendFunction;

function sendFunction() {
    console.log(message.value);
    sendMessage(message.value)
}
