const nav = document.querySelector('#main');
//find top of the nav bar on page load
const topOfNav = nav.offsetTop;

function fixNav(){
  console.log('Top of Nav', topOfNav, window.scrollY);
  //the scrollY position is greater than or equal to top of nav, if that is true
    if(window.scrollY >= topOfNav){
      //add padding to body to the height of the navbar
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    }else {
      document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);
