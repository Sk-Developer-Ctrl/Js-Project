let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

let voiceOptions = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(( voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)))
};

window.speechSynthesis.onvoiceschanged = voiceOptions

let voiceChange = () => {
  speech.voice = voices[voiceSelect.value];
}

voiceSelect.addEventListener("change", voiceChange)
let textAreaText = () => {
  speech.text= document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
}

document.querySelector("button").addEventListener("click", textAreaText)
