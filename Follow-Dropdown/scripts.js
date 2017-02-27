const triggers = document.querySelectorAll('.cool > li');
const background  = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(){
  console.log('enter');
  this.classList.add('trigger-enter');
  // with arrow function property of this is inherited
  setTimeout(()=> {
    if(this.classList.contains('trigger-enter')){
      this.classList.add('trigger-enter-active')
    }
  }, 150);

  //or
  // setTimeout(()=> this.classList.contains('trigger-enter')&& this.classList.add('trigger-enter-active'), 150);

  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  // console.log(dropdown);
  const dropdownCords = dropdown.getBoundingClientRect();
  console.log(dropdownCords);
  //have to get nav coordinates as well, as it might change
  const navCoords = nav.getBoundingClientRect();
  console.log(navCoords);
  const coords = {
    height: dropdownCords.height,
    width: dropdownCords.width,
    // have to offset by navCoords
    top: dropdownCords.top - navCoords.top,
    left: dropdownCords.left - navCoords.left
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`)
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);

}

function handleLeave(){
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');

}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
