$(document).ready(initPage);
function initPage(){
	toggleSideBar();
	enableBtn();
	select();
}

function toggleSideBar(){
	$('.sidebar__toggle').on('click',function(){
		$('.sidebar__toggle-icon > .icon').toggleClass('icon-open');
		$('.content__sidebar').toggleClass('close');
		$('.sidebar__list-menu').toggleClass('hide');
	})
}

function enableBtn(){
	$('.agreement').on('change', function(){
		if (this.checked) {
			$('.button-dispatch').removeClass('button-disabled').prop('disabled', false);
		} else {
			$('.button-dispatch').addClass('button-disabled').prop('disabled', true);
		}
	})
}

function select(){
	$('.select-js').niceSelect({});
}