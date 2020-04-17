let ToSendMessage = document.getElementById("Message");
let deleteButton = document.getElementById("Delete");
let sendButton = document.getElementById("Send");
let table = document.getElementById("messageTable");
let backButton = document.getElementById("Back");
let url = 'http://localhost:3000/Messages/';

let user = "Alice";
let reciever = "Bob";
let count = 0;
sendButton.addEventListener("click", function () {
    SendMessage(ToSendMessage.value);
});

deleteButton.onclick = deleteFunction;
function deleteFunction() {
    ToSendMessage.value = "";
}

backButton.onclick = Backfunction;
function Backfunction() {
    window.location = "../HTML/Index.html";
}

function ShowMessages(Messages){
    Messages.forEach(message =>CreateTabel(message));
}

GetMessages(user, reciever);
function GetMessages(theUser, the2User) {
    fetch(url)
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw `error with status ${response.status}`;
            }
        })
        .then((RecievedMessages) => {
            count = RecievedMessages.length;
            ShowMessages(RecievedMessages);
        })
        .catch((error) => {
            console.log(error);
        });
}
function CreateTabel(message) {
    let tr = document.createElement("tr");
    let tdEmpty = document.createElement("td");
    let tdMessage = document.createElement("td");
    let messageBox = document.createElement("span");
    messageBox.innerHTML = message["Text"];
    if (message.Sender == user){
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

function SendMessage(text) {
    let Message = {"id" : count + 1, "Sender" : user, "To" : reciever, "Text": text};
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(Message),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            }
        })
        .then(() => {
            CreateTabel(Message);
            deleteFunction();
        });
}