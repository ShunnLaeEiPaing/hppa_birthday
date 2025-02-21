
function openEnvelope() {
    const envelope = document.querySelector(".envelope");
    envelope.classList.add("opened");
}

// Function to flip cards on click
function flipCard(card) {
    card.classList.toggle("flipped");
}

// Show the chatbot when "Click here" is clicked
function showChatbot(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById("chatContainer").style.display = "block";
}

// Toggle Chat Visibility (for Close Button)
function toggleChat() {
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.style.display = (chatContainer.style.display === "block") ? "none" : "block";
}

// Handle Enter Key Press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Send Message
function sendMessage() {
    const inputField = document.getElementById("chatInput");
    const chatBody = document.getElementById("chatBody");
    const userMessage = inputField.value.trim();

    if (userMessage === "") return;

    // Append User Message
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("user-message");
    userMessageDiv.textContent = userMessage;
    chatBody.appendChild(userMessageDiv);

    // Clear Input
    inputField.value = "";

    // Scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;

    // Simulate Bot Response
    setTimeout(() => {
        const botMessageDiv = document.createElement("div");
        botMessageDiv.classList.add("bot-message");
        botMessageDiv.textContent = generateBotResponse(userMessage);
        chatBody.appendChild(botMessageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}

// Generate Simple Bot Responses
function generateBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes("hello")) {
        return "Hello! How can I help you today? ";
    } else if (lowerMessage.includes("who is hnin phyu phyu aye")) {
        return "The best girl who ever exists. The prettiest girl in the world. The luckiest girl to have someone as considerate and fun as Shunn Lae Ei Paing";
    } else if (lowerMessage.includes("birthday wish for me")) {
        return " Happy Birthday to you ! Living with you has been such a joy, and so grateful for all the laughs, late-night talks, and the other fights. Although you ruin my peaceful life and disrupt me while I'm watching dramas sometimes, still love you!!";
    } else {
        return "I'm not sure how to respond to that, but I'm here to chat! ";
    }
}

