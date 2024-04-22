function updateTextInput(val, elId) {
  document.getElementById(elId).value=val; 
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 8,
  dots: true,
  infinite: false,
  speed: 300,
  slidesPerView: 'auto',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
  autoHeight: true,
});

function changeImage(form) {

form.pic.src = form.imagename.value;
}