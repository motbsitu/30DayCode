const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) =>{
  isDown = true;
  slider.classList.add('active');
  //to find staring X scroll point
  // console.log('mouse down event', e.pageX);
  startX = e.pageX - slider.offsetLeft;
  //where started
  scrollLeft = slider.scrollLeft;

});
slider.addEventListener('mouseleave', () =>{
  isDown = false;
  slider.classList.remove('active');

});
slider.addEventListener('mouseup', () =>{
  isDown = false;
  slider.classList.remove('active');

});
slider.addEventListener('mousemove', (e) =>{
  //if isDown is not true, do nothing
  if(!isDown) return;
  // console.log('do work', isDown);
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  // console.log({x, startX});
  //determine deviation from Initial click to current position
  //added * 3 to scroll three px for every px mouse moves
  const walk = (x - startX) * 3;
  console.log('walk', walk);
  slider.scrollLeft = scrollLeft - walk;

});
