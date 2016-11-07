;$(function(){
	'use strict';
	var sidebar=$('#sidebar'),
	mask=$('.mask'),
	backButton=$('.back-to-top'),
	sidebar_trigger=$("#sidebar_trigger");

	sidebar_trigger.on('click',function(){
		mask.fadeIn();
		sidebar.css('right',0)
	})
	mask.on('click',function(){
		mask.fadeOut()
		sidebar.css('right',-sidebar.width())
	})
	backButton.on('click',function(){
		$('html,body').animate({
			scrollTop:0
		},800)
	})
	$(window).on('scroll',function(){
		// console.log($(window).scrollTop())
		// console.log($(window).height())
		if($(window).scrollTop()>($(window).height()))
			backButton.fadeIn()
		else
			backButton.fadeOut()
	})
	$(window).trigger('scroll')
})