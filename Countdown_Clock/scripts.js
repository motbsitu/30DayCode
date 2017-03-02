let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
  //clear existing timer
  clearInterval(countdown);
  const now = Date.now(); //current timestamp in milliseconds
  const then = now + seconds * 1000; //convert from seconds to milleseconds
  // console.log({now, then});
  //setInterval doesn't run until 1 second elapses, so have to display once
  displayTimeLeft(seconds);
  displayEndTime(then);
countdown = setInterval(()=>{
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if should stop
    if (secondsLeft < 0){
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  // console.log({minutes, remainderSeconds});
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp){
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer(){
  // console.log(this);
  const seconds = parseInt(this.dataset.time);
  // console.log(seconds);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  this.reset();
  timer(mins * 60);
});
