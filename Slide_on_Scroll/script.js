window.addEventListener('load', function(event){

//only run function every 20 milleseconds
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide(e){
    //scrolled down from top of browser
    // console.log(window.scrollY);
    sliderImages.forEach(sliderImage => {
      //amount scrolled from bottom of window view, halfway through image
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
      // console.log('slideInAt', slideInAt);

      //where is bottom of images
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;

      if(isHalfShown && isNotScrolledPast){
        sliderImage.classList.add('active');
      }else {
        sliderImage.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', debounce(checkSlide));

});
