// constant.js

// User input triggers (prompts)
const prompts = [
  ["hi", "hey", "hello"],
  ["who is Aathi"],
  [ "muthunaveen"],
  ["balaji"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "do you have a name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"],
  ["see you", "bye"],
  ["thankyou"],
  ["mahi"],
  ["Aathi"],
  ["who is Aathi"],
  ["who is hariharan"],
  ["who is karthikeyan"],
  ["who is kavinthangam"],
  ["LABIN"]
];

// Predefined responses (replies)
const replies = [
  [
    "Hello Balaji master!",
    "Greetings sir, how may I assist you today?",
    "Good day Balaji sir!"
  ],
  ["Aathi one and only kuthi"],
  ["muthunaveen othername aanaikutam muthunaveen"],
  ["Balaji is my Master"],
  []
  ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
  ["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am Moji", "I have a name Moji"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok", "I understand", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"],
  ["Bye Balaji sir", "See you Balaji sir"],
  ["Its My Pleasure"],
  ["mhahi bala sri"],
  ["Aathi one and only kuthi"],
  ["Aathi one and only kuthi"],
  ["hariharan becoming collector of virudhunagar district"],
  ["karthikeyan becoming CEO of Hyndai"],
  ["kavinthangam wife of manojkumar"],
  ["LABIN"]
];

// Alternative fallback replies
const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
];

// Special COVID-related replies
const coronavirus = [
  "Please stay home",
  "Wear a mask",
  "Fortunately, I don't have COVID",
  "These are uncertain times"
];

// 🔗 Ollama API settings
const OLLAMA_API_URL = "http://localhost:11434/api/generate";
const MODEL_NAME = "gpt-oss:20b";

