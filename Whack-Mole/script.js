const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

//random amount of time
function randomTime(min, max){
  return Math.round(Math.random() * (max - min) + min);
}

//random hole, get me a random DOM element
function randomHole(holes){
  // console.log(holes.length);
  //find random number of item in node list of DOM elements
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if(hole === lastHole){
    // console.log('Same as last one');
    return randomHole(holes);
  }
  //to prevent random from picking previous hole
  lastHole = hole;
  return hole;
}

function peek(){
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  // console.log(time,hole);
  hole.classList.add('up');
  setTimeout(()=>{
    hole.classList.remove('up');
    if(!timeUp) peek();
  }, time);
}

function startGame(){
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peek();
  //stops after 10 seconds
  setTimeout(()=> timeUp = true, 10000)
}

function bonk(e){
  // console.log(e);
  if(!e.isTrusted) return; //confirms that it is actual click event
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
