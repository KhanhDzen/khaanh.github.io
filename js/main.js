$(window).on('load', function(){
	if( $('.dashboard-cell_load') ){
		$('.dashboard-cell.dashboard-cell_load').removeClass('dashboard-cell_load');
	}
});

$(document).ready(initPage);
function initPage(){
	stickyHeader();
	activeLang();
	typedText();
	scrollDowns();
	validateFields();
	addDMY();
	dateMask();
	checkAgree();
	enableClick();
	calc();
	calcToggle();
	timeMask();
	datePicker();
	eventDropDown();
	openMenuSetting();
	callPopup();
	ImgTobg();
	notifications();
	dropdown();
	formEffect();
	password();
	customSelect();
	var el;
	function countCharacters(e){
		var textEntered, countRemaining, counter;
		textEntered = document.getElementById('tweet').value;
		counter = (300 - (textEntered.length));
		countRemaining = document.getElementById('charactersRemaining');
		countRemaining.textContent = counter;
	}
	el = document.getElementById('tweet');
	if(el){
		el.addEventListener('keyup', countCharacters, false);
	}
}

function dropdown() {
	$('.dropdown-btn').click(function(event) {
		event.preventDefault();
		$(this).parent().toggleClass('open');
	});
	$(document).on('mouseup touchend ',function (e){
		var container = $('.dropdown');
		if (!container.is(e.target) && container.has(e.target).length === 0){
			container.removeClass('open');
		}
	});
}

function ImgTobg() {
	$('.img-to-bg').each(function() {
		if ($(this).find('img').length) {
			$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')');
		}
	});
}

function notifications() {
	$('.notifications__close').on('click', function(event){
		event.preventDefault();
		$(this).parent().removeClass('notifications_show');
	});
	function share() {
		$('.dashboard-option[data-name="share"]').on('click', function(event){
			event.preventDefault();
			console.log('share');
		});
	}share();
	function pencilSquare() {
		$('.dashboard-option[data-name="pencil-square"]').on('click', function(event){
			event.preventDefault();
			console.log('pencil-square');
		});
	}pencilSquare();
	function externalLink() {
		$('.dashboard-option[data-name="external-link"]').on('click', function(event){
			event.preventDefault();
			if (document.querySelector('.notifications')){
				$('.notifications[data-name="success"]').addClass('notifications_show');
				setTimeout(function(){
					$('.notifications[data-name="success"]').removeClass('notifications_show');
				}, 5000);
			}
		});
	}externalLink();

	function deleteItem() {
		$('.dashboard-option[data-name="delete"]').on('click', function(event){
			event.preventDefault();
			console.log('delete');
			//$(this).parents('.dashboard-cell').remove();
		});
	}deleteItem();

	function copy() {
		$('.dashboard-option[data-name="copy"]').on('click', function(event){
			event.preventDefault();
			if (document.querySelector('.notifications')){
				$('.notifications[data-name="event-copy"]').addClass('notifications_show');
				setTimeout(function(){
					$('.notifications[data-name="event-copy"]').removeClass('notifications_show');
				}, 5000);
			}
			var cloneItemTitle = $(this).parents('.dashboard-cell').find('.dashboard-desc').text();
			var cloneItemLink = $(this).parents('.dashboard-cell').attr('href');
			var newItem = $('<a href="'+ cloneItemLink +'" class="mix dashboard-cell drafts">'
								+'<button type="button" class="btn btn_warning">Draft</button>'
								+'<div class="dashboard-wrap-options">'
									+'<div class="dashboard-hover">'
										+'<button class="dashboard-option" data-name="pencil-square">'
											+'<div class="dashboard-txt edit">Edit</div>'
											+'<img src="images/pencil-square.svg" alt="copy" class="dashboard-icon">'
										+'</button>'
									+'</div>'
									+'<div class="dashboard-hover">'
										+'<button class="dashboard-option" data-name="delete">'
											+'<div class="dashboard-txt delete">Delete</div>'
											+'<img src="images/delete.svg" alt="copy" class="dashboard-icon">'
										+'</button>'
									+'</div>'
								+'</div>'
								+'<div class="dashboard-content">'
									+'<div class="dashboard-img img-to-bg">'
										+'<img src="images/06.jpg" alt="images" class="dashboard-pic">'
									+'</div>'
									+'<div class="dashboard-subject">'
										+'<div class="dashboard-wrap-caption">'
											+'<div class="dashboard-date">'
												+'<p class="dashboard-month accent"></p>'
												+'<p class="dashboard-day card"></p>'
											+'</div>'
											+'<h3 class="h3 dashboard-desc">'+cloneItemTitle+'</h3>'
										+'</div>'
										+'<div class="dashboard-wrap-text">'
											+'<p class="dashboard-card card"></p>'
											+'<p class="dashboard-place card"></p>'
										+'</div>'
									+'</div>'
								+'</div>'
							+'</a>');
			newItem.prependTo('.dashboard__board');
			deleteItem();
			pencilSquare();
			share();
			externalLink();
		});
	}copy();
}

function addTask(){
	$('.create-event__main .btn-add').on('click', function(e){
		e.preventDefault();
		/*var cloneItem = $(this).parents('.create-event-row').clone(true);
		var cloneItemVal = cloneItem.find('.create-event-inp').val('').parents('.create-event-row');
		var cloneItemValTitle = cloneItem.find('.create-event-title').text(function(index){
			return "Task " + ( $('.event-tasks-list .create-event-title').length + 1);
		});
		cloneItem.appendTo('.event-tasks-list');*/
	});
}addTask();

function stickyHeader(){
	var pageY;

	window.onscroll = function(){
		pageY = window.pageYOffset;

		if (pageY > 0) {
			$('.header-page').addClass('active-shadow')
		} else {
			$('.header-page').removeClass('active-shadow')
		}
	}
}
function activeLang(){
	$('.header__layout-items:nth-child(2)').click(function(){
		$(this).addClass('active-items');
		$('.header__layout-items:first-child').removeClass('active-items');
		$('.header__layout').toggleClass('close');
	});

	$('.header__layout-items:first-child').click(function(){
		$(this).addClass('active-items');
		$('.header__layout-items:nth-child(2)').removeClass('active-items');
		$('.header__layout').toggleClass('close');
	});
}
function typedText(){
	if ($('.hero-strings').length > 0) {
		var typed = new Typed('#typed', {
			stringsElement: '#hero-strings-js',
			typeSpeed: 200,
			loop: true
		});
	}
}
function scrollDowns(){
	$(".hero__features").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
}

function formEffect(){
	$('.form-group .form__control').focusin(function(event) {
		$(this).parent().removeClass('form__box_valid');
		$(this).parent().removeClass('form__box_error');
	}).focusout(function(event) {
		$(this).parent().removeClass('input--filled');
	});

	$('.form-group .form__control').on('keyup', function() {
		if ($(this).val().length < 0) {
			$(this).parent().find('.form__control-clear').removeClass('active');
			$(this).parent().removeClass('input--filled');
		} else {
			$(this).parent().find('.form__control-clear').addClass('active');
			$(this).parent().addClass('input--filled');
		}
	});
}

function password() {
	$('.password .form__control').on('input', function() {
		if ($(this).val().length) {
			$(this).parent().addClass('password_enter');
		} else {
			$(this).parent().removeClass('password_enter');
		}
	});
	$('.password__view').on('click', function() {
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$(this).siblings('.form__control').attr('type', 'text');
		} else {
			$(this).removeClass('active');
			$(this).siblings('.form__control').attr('type', 'password');
		}
	});
}

function validateFields(){
	/*jQuery.validator.setDefaults({
		debug: true,
		success: "valid"
	});*/
	$(".form-group").validate({
		/*errorClass: "error",
		validClass: "valid",*/
		highlight: function(element) {
			$(element).parent().addClass('form__box_error').removeClass('form__box_valid');
		},
		unhighlight: function(element) {
			$(element).parent().removeClass('form__box_error').addClass('form__box_valid');
		},
		rules: {
			request: {
				required: false
			},
			firstname: "required",
			lastname: "required",
			username: {
				required: true,
				minlength: 2
			},
			birthday: {
				required: true,
				myRuleDate : true
			},
			email: {
				required: true,
				email: true,
				myEmail: true
			},
			password: {
				required: true,
				minlength: 5
			},
			password_again: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			}
		},
		messages: {
			request: {
				required: false,
				minlength: false
			},
			firstname: {
				required: false,
				minlength: false
			},
			lastname: {
				required: false,
				minlength: false
			},
			username: {
				required: false,
				minlength: false
			},
			email: {
				required: false,
				email: false,
				myEmail: false
			},
			password: {
				required: false,
				minlength: false
			},
			password_again: {
				required: false,
				minlength: false,
				equalTo: false
			},
			birthday: {
				required: false,
				myRuleDate : false
			}
		}
	});
}
function addDMY(){
	$.validator.addMethod(
		"myRuleDate",
		function(value, element){
			return value.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/);
		}
	);
	$.validator.addMethod(
		"myEmail",
		function(value, element){
			return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		}
	);
}
function dateMask(){
	$(".b-day").mask("99.99.9999",{placeholder:"dd.mm.yyyy",});
}
function checkAgree(){
	$('.form-group-privacy').click(function(){
		$(this).toggleClass('valid');
	})
}
function enableClick(){
	$('.form-group-check').on('click', function(){
		var check = $(this).find('input').prop("checked");
		if ( check == true ){
			$('.form-group-button-dis, .form-group-button').removeClass('btn-disable');
			$('.form-group-button-dis, .form-group-button').prop('disabled',false);
		} else {
			$('.form-group-button-dis, .form-group-button').addClass('btn-disable');
			$('.form-group-button-dis, .form-group-button').prop('disabled',true);
		}
	});
}
function checkAvatar(){
	$('.create-event__file').addClass('loaded');
}
function deleteAvatar(){
	$('.create-event__file-tip.delete').on('click', function(e){
		e.preventDefault();
		$('.create-event__file').removeClass('loaded');
		$('.create-event__file-preview').removeAttr('src');
		$('input[type="file"]').val('');
	});
}deleteAvatar();
function previewImage(event){
	if ($('.create-event').length > 0 || $('.account').length > 0) {
		var reader = new FileReader();
		reader.onload = function(){
			var output = document.getElementById('output_image');
			output.src = reader.result;
		}
		reader.readAsDataURL(event.target.files[0]);
	}
}
function timeMask(){
	if ($('.form__box').length > 0 ) {
		$.mask.definitions['H'] = "[0-2]";
		$.mask.definitions['h'] = "[0-9]";
		$.mask.definitions['M'] = "[0-5]";
		$.mask.definitions['m'] = "[0-9]";
		$('.form__control[data-name="time"]').mask("Hh:Mm", {
			completed: function() {
				var currentMask = $(this).mask();
				if (isNaN(parseInt(currentMask))) {
					$(this).val("");
				} else if (parseInt(currentMask) > 2359) {
					$(this).val("23:59");
				};
			}
		});
	}
}
function datePicker(){
	$('.datepicker-here-holder .datepicker-here').datepicker({
		language: 'en',
		autoClose: true,
		minDate: new Date()
	});
}
function checkImage(){
	$('.custom-file').addClass('check-image');
}
function eventDropDown(){
	$('.event__holder-dots').click(function(){
		$('.event__list').toggleClass('active-dropdown')
	});
	$(document).on('mouseup touchend' ,function(e){
		var container = $('.event__list');
		if (!container.is(e.target) && container.has(e.target).length === 0){
			container.removeClass('active-dropdown');
		}
	});
}
function openMenuSetting(){
	$('.header__registered__welcome').click(function(){
		$('.header__registered__account').toggleClass('account-active')
	});
	$(document).on('mouseup touchend' ,function(e){
		var container = $('.header__registered__account');
		if (!container.is(e.target) && container.has(e.target).length === 0){
			container.removeClass('account-active');
		}
	});
}
function callPopup(){
	$('.call-modal-js').magnificPopup({
		callbacks: {
			open: function() {
				$('body').css('overflow', 'hidden');
			},
			close: function() {
				$('body').css('overflow', '');
			}
		}
	});
	$('.btn-cancel').on('click', function(e){
		e.preventDefault();
		$.magnificPopup.close();
	});
}
function calc(){
	var total;
	$('#countPeople, #eventCost').on('change keyup keydown', function(){
		this.value = this.value.replace(/[^0-9\.,]/g, '');
		this.value = this.value.replace(/[,]/, '.');
		if( !$('#countPeople').val() == 0 && !$('#eventCost').val() == 0 ){
			$('.value').html(total = ((+$('#eventCost').val()) / (+$('#countPeople').val())).toFixed(2) )
		}
	})
}
function calcToggle(){
	$('.switch').click(function(){
		var check = $(this).find('.switch__toggle').prop('checked');
		if ( check == true ){
			$('.switch__toggle').prop('checked', true);
			$('.create-event__holder-estimation').slideDown('fast');
		} else {
			$('.switch__toggle').prop('checked', false);
			$('.create-event__holder-estimation').slideUp('fast');
		}
		//return false;
	})
}
function previewExecutor(event){
	if ($('.create-event').length > 0) {
		var reader = new FileReader();
		reader.onload = function(){
			var output = document.getElementById('event-output_image');
			output.src = reader.result;
		}
		reader.readAsDataURL(event.target.files[0]);
	}
}
function checkExecutor(){
	$('.account-preview').addClass('preview-active');
}

function customSelect(){
	jcf.setOptions('Select', {
		wrapNative: false,
		wrapNativeOnMobile: false,
	});
	jcf.replaceAll();
}