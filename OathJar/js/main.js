$(window).on('load',function(){
	$('.holder-logo-tagline').addClass('load');
})

$(document).ready(initPage);
function initPage(){
	ImgTobg();
	mobileMenu();
	pageScrollTop();
	typedEffect();
	smoothScroll();
}

function ImgTobg() {
	$('.img-to-bg').each(function() {
		if ($(this).find('.img-to-bg__image').length) {
			$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')');
		}
	});
}

function mobileMenu(){
	$('<span class="open-menu"><span></span><span></span><span></span><span></span></span>').appendTo('.header-page > .container');
	$('<span class="fader"/>').appendTo('.header-page > .container');
	$('html').on('click', '.open-menu', function() {
		$('body').toggleClass('menu-opened');
		return false;
	});
	$('.fader').on('click touchmove', function(event) {
		$('body').removeClass('menu-opened');
	});
}

function pageScrollTop() {
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.btn-page-up').fadeIn();
		} else {
			$('.btn-page-up').fadeOut();
		}
	});
	$('.btn-page-up').click(function(e){
		var offsetTop = $('body').offset().top;
		$('html, body').stop().animate({ 
			scrollTop: offsetTop
		}, 500);
		e.preventDefault();
	});
}

function typedEffect(){
	var elem = new TypeIt('#typed-elem', {
		strings: "Hi Janice! Check out this great website",
		cursor: false
	})
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 100 ){
			elem.go();
		}
	})
}

function smoothScroll(){
	$(".header__holder-bottom").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
};
