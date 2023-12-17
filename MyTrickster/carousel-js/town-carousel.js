//------------------------- MOND SHOWCASE ---------------------------------------------
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("game_content3_slides");
  let dots = document.getElementsByClassName("slides_dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//------------------------- LIYUE SHOWCASE ---------------------------------------------
let IdxLiyue = 1;
showSlidesLiyue(IdxLiyue);

// Next/previous controls
function plusSlidesLiyue(n) {
  showSlidesLiyue(IdxLiyue += n);
}

// Thumbnail image controls
function currentSlideLiyue(n) {
  showSlidesLiyue(IdxLiyue = n);
}

function showSlidesLiyue(n) {
  let i;
  let slidesLiyue = document.getElementsByClassName("town_content3_slides");
  let dots = document.getElementsByClassName("slides_dot_liyue");
  if (n > slidesLiyue.length) {IdxLiyue = 1}
  if (n < 1) {IdxLiyue = slidesLiyue.length}
  for (i = 0; i < slidesLiyue.length; i++) {
    slidesLiyue[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesLiyue[IdxLiyue-1].style.display = "block";
  dots[IdxLiyue-1].className += " active";
}

//------------------------- INAZUMA SHOWCASE ---------------------------------------------
let IdxInazuma = 1;
showSlidesInazuma(IdxInazuma);

// Next/previous controls
function plusSlidesInazuma(n) {
  showSlidesInazuma(IdxInazuma += n);
}

// Thumbnail image controls
function currentSlideInazuma(n) {
  showSlidesInazuma(IdxInazuma = n);
}

function showSlidesInazuma(n) {
  let i;
  let slidesInazuma = document.getElementsByClassName("town_content4_slides");
  let dots = document.getElementsByClassName("slides_dot_inazuma");
  if (n > slidesInazuma.length) {IdxInazuma = 1}
  if (n < 1) {IdxInazuma = slidesInazuma.length}
  for (i = 0; i < slidesInazuma.length; i++) {
    slidesInazuma[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesInazuma[IdxInazuma-1].style.display = "block";
  dots[IdxInazuma-1].className += " active";
}



