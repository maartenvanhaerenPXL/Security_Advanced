let message = document.getElementById("Message");
let deleteButton = document.getElementById("Delete");
let chatroomOf = document.getElementById("Chatroom")
let welkom = document.getElementById("Welkom");
let sendButton = document.getElementById("Send")
let table = document.getElementById("messageTable");
let backButton = document.getElementById("Back");
//hardcoded users
let userA = "Maarten";
let userB = "user2";
//
chatroomOf.innerHTML += userA;
welkom.innerHTML += userB;

deleteButton.onclick = deleteFunction;

function deleteFunction() {
    message.value = "";
}
function addMessage(toAddMassage, recieve) {
    let tr = document.createElement("tr");
    let tdEmpty = document.createElement("td");
    let tdMessage = document.createElement("td");
    let messageBox = document.createElement("span");
    messageBox.innerHTML = toAddMassage;
    if (recieve == 0){
        tdMessage.id = "messageBox";
        tdMessage.appendChild(messageBox)
        tr.appendChild(tdEmpty);
        tr.appendChild(tdMessage);
    }else{
        tdMessage.id = "messsageBoxRecieved";
        tdMessage.appendChild(messageBox)
        tr.appendChild(tdMessage);
        tr.appendChild(tdEmpty);
    }
    table.appendChild(tr);
    console.log(table);
}


sendButton.onclick = sendFunction;

function sendFunction() {
    console.log(message.value);
    addMessage(message.value, 0)
    addMessage("hey", 1)

}

backButton.onclick = Backfunction;
function Backfunction() {
    window.location = "../HTML/Index.html";
}
