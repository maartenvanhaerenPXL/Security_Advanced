let ToSendMessage = document.getElementById("Message");
let deleteButton = document.getElementById("Delete");
let sendButton = document.getElementById("Send");
let table = document.getElementById("messageTable");
let backButton = document.getElementById("Back");
let url = 'http://localhost:3000/Messages/';
let FileButton = document.getElementById("custom-button");
let OpenDirectory = document.getElementById("real-file");

//json-server --watch db.json       om de database te starten

let count = 0;
sendButton.addEventListener("click", function () {
    if(ToSendMessage.value != "") {
        SendMessage(ToSendMessage.value);
        ToSendMessage.value = "";
    }
});

FileButton.addEventListener("click", function () {
    OpenDirectory.click();
});

OpenDirectory.addEventListener("change", function () {
    if(OpenDirectory.value){
        let files = OpenDirectory.files[0]
        const image = document.createElement('img');
        image.src = URL.createObjectURL(files);
        ToSendMessage.value = files.name ;
        ToSendMessage.appendChild(image);
        ToSendMessage.disabled = true;
    }
});

deleteButton.onclick = deleteFunction;
function deleteFunction() {
    ToSendMessage.value = "";
    ToSendMessage.disabled = false;
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
    console.log(message);
    let tr = document.createElement("tr");
    let tdEmpty = document.createElement("td");
    let tdMessage = document.createElement("td");
    let messageBox = document.createElement("span");
    if(message.Text === "file"){
        let img = document.createElement("img");
        img.src = message.File;
        img.style.width = '50%';
        img.style.height = '50%';
        img.alt = "file";
        messageBox.appendChild(img);
    }else {
        messageBox.innerHTML = message["Text"];
    }
    if (message.Sender === user){
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
    let Message;
    if (ToSendMessage.disabled){
        Message = {"id" : count + 1, "Sender" : user, "To" : reciever, "Text": "file", "File": URL.createObjectURL(OpenDirectory.files[0])};
        ToSendMessage.disabled = false;
    }else{
        Message = {"id" : count + 1, "Sender" : user, "To" : reciever, "Text": text};
    }

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
