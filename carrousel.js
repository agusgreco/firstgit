var slideIndex = 1;
showSlides(slideIndex);

var slideIndex1 = 1;
showSlides1(slideIndex1);

var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides1(slideIndex1 += n);
}
function currentSlide(n) {
  showSlides2(slideIndex2 += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex1-1].style.display = "block";
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex2-1].style.display = "block";
}
