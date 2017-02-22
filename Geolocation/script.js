const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
  console.log(data);
  //update the speed output
  speed.textContent = data.coords.speed;
  //update the rotation of the compass
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) =>{
    console.err(err);
    alert('You have to allow location finder');
});
