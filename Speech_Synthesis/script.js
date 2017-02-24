window.addEventListener('load', function(event){

const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices(){
  //get all the voices available
  voices = this.getVoices();
  console.log(voices);
  //loop over them to add to selector
  voicesDropdown.innerHTML =  voices
  //filter for english
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`)
    .join('');
}
//set the voice to the voice selected in drop down
function setVoice(){
  // console.log('changing voice', this.value);
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}
//restart
function toggle(startOver = true){
  //stop from speeking
  speechSynthesis.cancel();
  //start speeking when selected new from dropdown
  if(startOver){
    speechSynthesis.speak(msg);
  }
}

function setOption(){
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}
//look for voices available in browser speechSynthesis method
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
//bind options to selectors
options.forEach(option => option.addEventListener('change', setOption));

//stop and speak buttons
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', toggle.bind(null, false));


});
