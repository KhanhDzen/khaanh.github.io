$(document).ready(initPage);
function initPage(){
	ImgTobg();
	mobileMenu();
	pageScrollTop();
	swiperSlide();
	smoothTransition();
	// swiperVertical();
}

var mixer = mixitup('#container');

function swiperSlide(){
	var mySwiper = new Swiper ('.swiper-container', {
		loop: true,
		noSwiping: true,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true
		},
	})
}

function ImgTobg() {
	$('.img-to-bg').each(function() {
		if ($(this).find('.img-to-bg__image').length) {
			$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')');
		}
	});
}

function pageScrollTop() {
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
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

function pageScroll(){
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 100 ) {
			$('.header-page').addClass('header-active');
		} else {
			$('.header-page').removeClass('header-active');
		}
	})
}pageScroll();

function smoothTransition(){
    $("#menu, #down").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
};

function progressBar(){
	var branding = new ldBar(".branding");
	var bar1 = document.getElementsByClassName('branding').ldBar;
	branding.set(80);

	var web = new ldBar('.web');
	var bar2 = document.getElementsByClassName('web').ldBar;
	web.set(75);

	var ui = new ldBar('.ui-ux');
	var bar3 = document.getElementsByClassName('ui-ux').ldBar;
	ui.set(60);
}

function progress(){
	var elem1 = document.getElementById('progress-branding'),
	elem2 = document.getElementById('progress-web'),
	elem3 = document.getElementById('progress-ui'),
	percent1 = document.getElementById('percent-branding'),
	percent2 = document.getElementById('percent-web'),
	percent3 = document.getElementById('percent-ui'),
	id1 = setInterval(progressStatusBranding,10),
	id2 = setInterval(progressStatusWeb,10),
	id3 = setInterval(progressStatusUi,10),
	width = 1;
	function progressStatusBranding(){
		if (width >= 80) {
			clearInterval(id1);
		} else {
			width++;
			elem1.style.width = width + '%';
			percent1.innerHTML = width * 1 + ' %';
		}
	}
	function progressStatusWeb(){
		if (width >= 65) {
			clearInterval(id2);
		} else {
			width++;
			elem2.style.width = width + '%';
			percent2.innerHTML = width * 1 + ' %';
		}
	}
	function progressStatusUi(){
		if (width >= 75) {
			clearInterval(id3);
		} else {
			width++;
			elem3.style.width = width + '%';
			percent3.innerHTML = width * 1 + ' %';
		}
	}
}
progress();

function mobileMenu(){
	$('.burger-menu').on('click',function(){
		$(this).toggleClass('active');
		$('.header__nav').toggleClass('nav-active');
		if ( $('.burger-menu').hasClass('active') ) {
			$('body').addClass('no-scroll');
		} else {
			$('body').removeClass('no-scroll');
		}
	})
}



$(function () {
	var jqBar = $('#go-ahead');
	var jqBarStatus = true;
	$(window).scroll(function() {
		var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
		if (scrollEvent && jqBarStatus) { 
			jqBarStatus = false;
			progressBar();
		}
	});
});
