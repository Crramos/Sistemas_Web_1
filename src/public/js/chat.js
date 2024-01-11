const socket = io();
const form = document.getElementById("form-chat");
const input = document.getElementById("input");
const messages = document.getElementById("messages");
const chatContainer = document.getElementById("chat-container");
const username = chatContainer.getAttribute("data-username");

socket.on("loadMessages", (previousMessages) => {
    previousMessages.forEach((msg) => {
        displayMessage(msg);
    });
});

form.addEventListener('submit', function(e){
    e.preventDefault();
    const messageText = input.value.trim();

    if (messageText) {
        const mentionedUser = extractMentionedUser(messageText);

        socket.emit("chat", { message: messageText, username: username, mentionedUser: mentionedUser });
        input.value = "";
    }
});

socket.on("chat", (data) => {
    displayMessage(data);
    chatContainer.scrollTop = chatContainer.scrollHeight;
});

function displayMessage(data) {
    const item = document.createElement("li");
    item.textContent = `${data.username}: ${data.message}`;

    if (data.username === username) {
        item.classList.add("current-user-message");
    } else {
        item.classList.add("other-user-message");
    }

    messages.appendChild(item);
}

function extractMentionedUser(messageText) {
    // Obtener el nombre antes del @
    const mentionedUser = messageText.split('@')[0].trim();

    // Devolver solo el nombre de usuario o null si no se encuentra ningún @ en el mensaje
    return mentionedUser !== messageText ? mentionedUser : null;
}
