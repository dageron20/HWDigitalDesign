"use strict";

var dots = document.getElementsByClassName('slider__tab--item');
var dotsArea = document.getElementsByClassName('slider__tab')[0];
var slides = document.getElementsByClassName('slider__item');
var slideIndex = 1;
var prevBtn = document.querySelector('.left-btn');
var nextBtn = document.querySelector('.rigth-btn');
showSlides(slideIndex);

function showSlides(n) {
  if (n < 1) {
    slideIndex = slides.length;
  } else if (n > slides.length) {
    slideIndex = 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (var _i = 0; _i < dots.length; _i++) {
    dots[_i].classList.remove('active');
  }

  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].classList.add('active');
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

prevBtn.addEventListener("click", function onclick() {
  plusSlides(-1);
});
nextBtn.addEventListener("click", function onclick() {
  plusSlides(+1);
});
dotsArea.addEventListener("click", function onclick(event) {
  for (var i = 0; i < dots.length + 1; i++) {
    if (event.target.classList.contains('slider__tab--item') && event.target === dots[i - 1]) {
      currentSlide(i);
    }
  }
});
setInterval(function () {
  currentSlide(slideIndex);
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
}, 3000);