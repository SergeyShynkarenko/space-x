// // Import jQuery module (npm i jquery)
import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

require('../js/vendor/slick-slider/slick.min.js')
	document.addEventListener('DOMContentLoaded', () => {

//preloader
window.onload = function () {
	const preloader = document.getElementById('preloader');
	preloader.classList.add('hide-preloader');
  setInterval(function() {
      preloader.classList.add('preloader-hidden');
	}, 990);
};

//burger
	document.querySelector('.hamburger').addEventListener('click', function () {
		document.querySelector('.hamburger--slider').classList.toggle('is-active');
		document.querySelector('.menu__list').classList.toggle('menu__list--active');
		document.querySelector('body').classList.toggle('hidden__body');
	});

//scroll to top
	const scrollToTopBtn = document.getElementById("scrollToTopBtn");

	window.onscroll = () => {
		if (window.scrollY > 700) {
			scrollToTopBtn.classList.remove('btn-top__hide');
		} else if (window.scrollY < 700){
			scrollToTopBtn.classList.add('btn-top__hide');
		}
	};

	scrollToTopBtn.onclick = () => {
		window.scrollTo(0, 0);
	};

//slider
  $(function() {
    $('.slider__box').slick({
    	prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/dist/arrow-left.svg" alt="Arrow-left">',
    	nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/dist/arrow-right.svg" alt="Arrow-right">',
    	responsive: [
    		{
		      breakpoint: 481,
		      settings: {
		        arrows: false
		      }
    		},
  		]
    });
	});

});
