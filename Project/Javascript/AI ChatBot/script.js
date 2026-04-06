const chatContainer = document.getElementById("tab");
const messageInput = document.getElementById("msg_text");
const sendButton = document.getElementById("sendBtn");

// Helper: Scroll to bottom of chat
function scrollToBottom() {
  if (chatContainer) {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
}

// Remove welcome placeholder if needed (when first real message arrives)
let welcomeRemoved = false;
function removeWelcomeBanner() {
  if (!welcomeRemoved) {
    const welcomeDiv = chatContainer.querySelector(".welcome-card");
    if (welcomeDiv) welcomeDiv.remove();
    welcomeRemoved = true;
  }
}

// Add a message to the chat (type: 'user' or 'bot')
function addMessage(text, sender) {
  removeWelcomeBanner();

  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender === "user" ? "user-message" : "bot-message"}`;

  const avatarDiv = document.createElement("div");
  avatarDiv.className = "avatar";
  if (sender === "user") {
    avatarDiv.textContent = "👤";
  } else {
    avatarDiv.textContent = "🤖";
  }

  const bubbleDiv = document.createElement("div");
  bubbleDiv.className = "bubble";
  // support basic line breaks & simple formatting
  bubbleDiv.innerHTML = text.replace(/\n/g, "<br>");

  messageDiv.appendChild(avatarDiv);
  messageDiv.appendChild(bubbleDiv);
  chatContainer.appendChild(messageDiv);
  scrollToBottom();
}

// Simulate "typing..." indicator
let typingTimeout = null;
function showTypingIndicator() {
  // remove existing typing indicator if any
  const existingTyping = chatContainer.querySelector(".typing-message");
  if (existingTyping) existingTyping.remove();

  const typingDiv = document.createElement("div");
  typingDiv.className = "message bot-message typing-message";
  const avatarSpan = document.createElement("div");
  avatarSpan.className = "avatar";
  avatarSpan.textContent = "🤖";
  const typingBubble = document.createElement("div");
  typingBubble.className = "typing-indicator";
  typingBubble.innerHTML = "<span></span><span></span><span></span>";
  typingDiv.appendChild(avatarSpan);
  typingDiv.appendChild(typingBubble);
  chatContainer.appendChild(typingDiv);
  scrollToBottom();
}

function hideTypingIndicator() {
  const typingElem = chatContainer.querySelector(".typing-message");
  if (typingElem) typingElem.remove();
}

// ----- AI RESPONSE LOGIC (intelligent mock + relevant answers) -----
function getAIResponse(userMessage) {
  const msg = userMessage.toLowerCase().trim();

  // 1. Greetings & small talk
  if (msg.match(/^(hi|hello|hey|hola|greetings|sup)/i)) {
    return "👋 Hello there! I'm Code Net AI, your coding companion. How can I assist you today?";
  }
  if (msg.match(/how are you/i)) {
    return "I'm running on pure algorithms and zero coffee! ☕ But I'm ready to help you with code, logic, or any tech query.";
  }
  if (msg.includes("thank")) {
    return "You're very welcome! 😊 Happy to help — feel free to ask more questions.";
  }

  // 2. Coding / tech specific
  if (
    msg.includes("python") &&
    (msg.includes("loop") || msg.includes("for") || msg.includes("while"))
  ) {
    return "🐍 Python loop example:\n```python\nfor i in range(5):\n    print(f'Iteration {i}')\n\n# while loop\ncount = 0\nwhile count < 3:\n    print('Count:', count)\n    count += 1\n```\nNeed more specific?";
  }
  if (
    msg.includes("javascript") ||
    (msg.includes("js") && !msg.includes("json"))
  ) {
    return "⚡ JavaScript tip: Use modern ES6 features!\n```js\nconst greet = (name) => `Hello ${name}!`;\nconsole.log(greet('Developer'));\n```\nWant async/await or DOM examples?";
  }
  if (msg.includes("react")) {
    return "⚛️ React is a UI library. Here's a functional component:\n```jsx\nfunction Welcome({ name }) {\n  return <h1>Hello, {name}</h1>;\n}\n```\nWant hooks (useState, useEffect) explanation?";
  }
  if (msg.includes("html") || msg.includes("css")) {
    return "🎨 Modern HTML/CSS: Flexbox & Grid are essential! Need layout examples or responsive design tricks?";
  }
  if (
    msg.includes("function") ||
    (msg.includes("method") && !msg.includes("javascript"))
  ) {
    return "🔧 Functions encapsulate logic. In Python:\n```python\ndef add(a, b):\n    return a + b\n```\nIn JS: `const sum = (a,b) => a+b;` Need more details?";
  }
  if (msg.includes("array") || msg.includes("list")) {
    return "📚 Working with arrays/lists:\n- JavaScript: map, filter, reduce\n- Python: list comprehensions\nExample: `[x*2 for x in range(5)]` → [0,2,4,6,8]. Want a specific operation?";
  }
  if (msg.includes("api") || msg.includes("fetch") || msg.includes("axios")) {
    return "🌐 Fetch API example (JS):\n```js\nfetch('https://api.example.com/data')\n  .then(res => res.json())\n  .then(data => console.log(data));\n```\nNeed error handling or async/await version?";
  }
  if (msg.includes("error") || msg.includes("debug")) {
    return "🐞 Debugging tips: check console logs, use breakpoints, read stack traces. Share your error and I'll try to help!";
  }
  if (
    msg.includes("what is") ||
    msg.includes("define") ||
    msg.includes("meaning")
  ) {
    if (msg.includes("variable"))
      return "📦 Variable: container for storing data values. e.g., `let score = 100;` in JS or `name = 'Alex'` in Python.";
    if (msg.includes("algorithm"))
      return "🧠 Algorithm: step-by-step procedure to solve a problem. Sorting, searching, recursion are classic examples.";
    return "💡 Great question! I can explain coding concepts, syntax, frameworks, or help with logic. Ask me more specifically.";
  }

  // 3. General knowledge or fun
  if (msg.includes("joke")) {
    return "😂 Why do programmers prefer dark mode? Because light attracts bugs! 😜 Want another one?";
  }
  if (msg.includes("weather") || msg.includes("time")) {
    return "🌦️ I don't have live weather data, but I can help you write code to fetch weather using APIs like OpenWeatherMap!";
  }
  if (msg.includes("help") || msg.includes("commands")) {
    return "📖 I can answer coding questions, explain concepts, give code snippets, and chat tech. Try: 'python loop', 'react component', 'fetch API', or just ask anything!";
  }

  // 4. fallback intelligent / context aware
  if (msg.length > 3) {
    return `🤔 I see you're asking: "${userMessage.substring(0, 70)}". As an AI coding assistant, I specialize in programming, algorithms, web dev, and problem-solving. Could you clarify your tech question? I'll do my best to help!`;
  } else {
    return "✨ Hi! Type a coding question, or just say 'hello'. I'm here to help with Python, JavaScript, HTML/CSS, React, and more!";
  }
}

// main send logic with typing simulation and AI reply
async function sendMessage() {
  let rawMessage = messageInput.value.trim();
  if (rawMessage === "") return;

  // disable input briefly to avoid double send
  messageInput.disabled = true;
  sendButton.disabled = true;

  // display user message
  addMessage(rawMessage, "user");
  messageInput.value = "";

  // show typing indicator
  showTypingIndicator();

  // simulate realistic network delay (between 400ms and 1300ms)
  const delay = Math.random() * 700 + 450;

  // Get AI response based on user message
  const aiReply = getAIResponse(rawMessage);

  // after delay, remove typing and show bot reply
  setTimeout(() => {
    hideTypingIndicator();
    addMessage(aiReply, "bot");
    // re-enable input
    messageInput.disabled = false;
    sendButton.disabled = false;
    messageInput.focus();
  }, delay);
}

// Enter key handler
function handleKeyPress(e) {
  if (e.key === "Enter" && !messageInput.disabled) {
    e.preventDefault();
    sendMessage();
  }
}

// Instagram placeholder function (original request: onclick="insta()")
function insta() {
  // Simulate redirect or social link — opens new tab with mock / or just alert for fun
  // Since no actual link was provided, I'll show a friendly toast-style popup.
  // Also we can optionally open a new window with a relevant Code Net page or Instagram link.
  // As per good UX: Show a neat alert with info.
  const userConfirmed = confirm(
    "📸 Connect with Code Net on Instagram?\n(Click OK to go to our mock profile page)\n\nWe'd love to have you!",
  );
  if (userConfirmed) {
    // For demonstration: open a new tab with a placeholder (instagram mock or official)
    // Using a safe simulation - but we can open a generic '#' and later you can replace with actual URL.
    window.open("https://www.instagram.com/codenet.ai/", "_blank");
  }
}

// attach event listeners and also fix the global missing references
// The original HTML had onclick="send()" and onclick="insta()" but we also attach robust listeners.
window.send = function () {
  sendMessage();
};

window.insta = function () {
  insta();
};

// Also attach modern event listeners to button and input
if (sendButton) {
  sendButton.addEventListener("click", (e) => {
    e.preventDefault();
    sendMessage();
  });
}

if (messageInput) {
  messageInput.addEventListener("keypress", handleKeyPress);
}

// Logo click insta integration
const logoDiv = document.getElementById("instaLogo");
if (logoDiv) {
  logoDiv.addEventListener("click", () => insta());
}

// Initialize focus and additional cleanup (if any)
window.addEventListener("load", () => {
  messageInput.focus();
  // ensure no duplicate welcome if any issues
  if (chatContainer.children.length === 0) {
    const welcomeDiv = document.createElement("div");
    welcomeDiv.className = "welcome-card";
    welcomeDiv.innerText =
      "🤖 Hello! I'm Code Net AI. Ask me anything — coding, tech, explanations, or just chat. Type your message below ✨";
    chatContainer.appendChild(welcomeDiv);
    welcomeRemoved = false;
  } else {
    // if somehow welcome exists set flag true
    if (chatContainer.querySelector(".welcome-card")) welcomeRemoved = false;
    else welcomeRemoved = true;
  }
  scrollToBottom();
});

// final safety: prevent any missing image from breaking layout (image from ibb is stable)
console.log("Code Net AI — fully fixed and interactive");
