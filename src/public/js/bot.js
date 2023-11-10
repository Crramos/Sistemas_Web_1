document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function() {
    const userMessage = userInput.value;
        if (userMessage !== "") {
            addUserMessage(userMessage);
            botReply("Lo siento, soy un bot de ejemplo y no puedo responder a eso.");
            userInput.value = "";
        }
    });

    function addUserMessage(message) {
        const userDiv = document.createElement("div");
        userDiv.textContent = message;
        chatBox.appendChild(userDiv);
    }

    function botReply(message) {
        const botDiv = document.createElement("div");
        botDiv.classList.add("message-bot");
        botDiv.textContent = message;
        chatBox.appendChild(botDiv);
    }
});