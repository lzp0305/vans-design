function back(){
	var backLeft = $('.menu_on').position().left;
	var backWidth = $('.menu_on').width();
	$('.back').css({
		'left': backLeft,
		'width': backWidth
	});
}

$('.fir_item').hover(function() {
	var nowLeft = $(this).position().left;
	var nowWidth = $(this).width();
	$('.back').css({
		'left': nowLeft,
		'width': nowWidth
	});
	var menuWidth = $('.menu').width();
	var menuLeft = $('.menu').position().left;
	var leftCha = -(nowLeft - menuLeft);
	$('.sec_menu').width(menuWidth);
	$('.sec_menu').css('left',leftCha);
	$('.sec_link').addClass('animated fadeInRight');
	$(this).children('.sec_menu').find('a').each(function(index, el) {
		$(el).css('animation-delay', '0.'+index+'s');
	});
	$('.menu_on').children('.fir_link').css('color', '#727171');
	$(this).children('.fir_link').css('color', '#fff');
}, function() {
	back();
	if ($(this).hasClass('menu_on')) {
		$(this).children('.fir_link').css('color', '#fff');
	} else {
		$('.menu_on').children('.fir_link').css('color', '#fff');
		$(this).children('.fir_link').css('color', '#727171');
	}
});


$('.sec_menu').css('left', $('.menu').position().left-$('.menu').width());

$('.contact_weixin').hover(function() {
	$('.weixin_qrcode').css('display', 'block');
}, function() {
	$('.weixin_qrcode').css('display', 'none');
});



$(document).ready(function() {
	back();
});