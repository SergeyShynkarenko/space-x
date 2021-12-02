// // Import jQuery module (npm i jquery)
import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

require('../js/vendor/slick-slider/slick.min.js')
	document.addEventListener('DOMContentLoaded', () => {

	document.querySelector('.hamburger').addEventListener('click', function () {
		document.querySelector('.hamburger--slider').classList.toggle('is-active');
		document.querySelector('.menu__list').classList.toggle('menu__list--active');
	});

  $(function() {
    $('.slider__box').slick({
    	prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/dist/arrow-left.svg" alt="Arrow-left">',
    	nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/dist/arrow-right.svg" alt="Arrow-right">',
    });
	});

});
