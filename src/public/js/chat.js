const socket = io();
const form = document.getElementById("form-chat");
const input = document.getElementById("input");
const messages = document.getElementById("messages");
const chatContainer = document.getElementById("chat-container");

socket.on("loadMessages", (previousMessages) => {
    previousMessages.forEach((msg) => {
        const item = document.createElement("li");
        item.textContent = `${msg.username}: ${msg.message}`;
        
        if (msg.username === username) {
            item.classList.add("current-user-message");
        } else {
            item.classList.add("other-user-message");
        }

        messages.appendChild(item);
    });
});

const username = chatContainer.getAttribute("data-username");
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(input.value){
        socket.emit("chat", { message: input.value, username: username});
        input.value = "";
    }
});

socket.on("chat", (data) =>{
    const item = document.createElement("li");
    item.textContent = `${data.username}: ${data.message}`;

    if (data.username === username) {
        item.classList.add("current-user-message");
    } else {
        item.classList.add("other-user-message");
    }

    messages.appendChild(item);
    chatContainer.scrollTop = chatContainer.scrollHeight;
});