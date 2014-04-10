$(function(){
	$(".owl-carousel").owlCarousel({
		items : 2, //10 items above 1000px browser width
		itemsDesktop : [1000,2], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [600,2], //2 items between 600 and 0
		itemsMobile : [600,2], // itemsMobile disabled - inherit from itemsTablet option
		pagination: false
	});

	$("#left_nav").mmenu();

	$("#right_nav").mmenu({
		position: 'right'
	});
});