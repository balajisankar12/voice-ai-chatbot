const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  const voice = new SpeechSynthesisUtterance(string);
  voice.lang = "en-US";
  voice.volume = 1;
  voice.rate = 1;
  voice.pitch = 1;
  synth.speak(voice);
};
