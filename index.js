document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");

  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter" && !inputField.disabled) {
      const input = inputField.value.trim();
      inputField.value = "";
      if (input !== "") {
        output(input);
      }
    }
  });
});

async function output(input) {
  const inputField = document.getElementById("input");
  inputField.disabled = true; // 🚫 Disable input while processing

  const messagesContainer = document.getElementById("messages");

  // ✅ Step 1: Show user input on right
  const userDiv = document.createElement("div");
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  // ✅ Step 2: Add placeholder bot message on left
  const botDiv = document.createElement("div");
  botDiv.className = "bot response";
  const botText = document.createElement("span");
  botText.innerText = "Typing...";
  const botImg = document.createElement("img");
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // ✅ Step 3: Process input and get response
  let product;

  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  const match = compare(prompts, replies, text);

  if (match) {
    product = match;
  } else {
    product = await fetchOllamaReply(input);
  }

  // ✅ Step 4: Replace "Typing..." with actual response
  botText.innerText = product;
  textToSpeech(product);

  inputField.disabled = false; // ✅ Re-enable input
  inputField.focus(); // 🔁 Focus back after unlock
}

function compare(promptsArray, repliesArray, string) {
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        const replies = repliesArray[x];
        return replies[Math.floor(Math.random() * replies.length)];
      }
    }
  }
  return null;
}

async function fetchOllamaReply(prompt) {
  try {
    const response = await fetch(OLLAMA_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        prompt: `You are a friendly AI chatbot. Answer clearly and helpfully.\nUser: ${prompt}\nAI:`,
        stream: false
      })
    });

    const data = await response.json();
    return data.response?.trim() || "I couldn't think of a reply!";
  } catch (error) {
    console.error("Ollama error:", error);
    return "Sorry, I couldn't reach my brain (Ollama).";
  }
}
