$(document).ready(initPage);
function initPage(){
	initCarousel();
}



function initCarousel(){
	function heroCarousel(){
		$('.hero__carousel').slick({
			slidesToShow: 1,
			dots: true,
		})
	}heroCarousel();

	function productCarousel(){
		$('.product__row-carousel').slick({
			slidesToShow:4,
			// dots: true
		})
	}productCarousel();
}

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




// function slick(){
// 	$('.hero__carousel').slick({
// 		slidesToShow: 1,
// 		dots: true,
// 	})
// }slick();