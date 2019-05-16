$(document).ready(initPage);
function initPage(){
	initCarousel();
}



function initCarousel(){
	function heroCarousel(){
		$('.hero__carousel').owlCarousel({
			items:1,
			dots: true
		})
	}heroCarousel();

	function productCarousel(){
		$('.product__carousel').owlCarousel({
			items:4,
			dots: true
		})
	}productCarousel();
}


// function switchLang(){
// 	$('.lang-list').on('click',function(){
// 		$('.lang-link').toggleClass('active');
// 	})
// }switchLang();



function openDropDwon(){
	$('.dropdown-btn').on('click', function(){
		$('.category').toggleClass('open');
	})
}openDropDwon();


function mobileMenu(){
	$('.header__info-mobile').on('click', function(){
		console.log('asdasdas');
		$('.header__info-wrap').toggleClass('mob');
		$('body').toggleClass('no-scroll');
	})
}mobileMenu();