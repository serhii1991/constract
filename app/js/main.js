$(function() {

	$(".header__slider").slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><span class="icon-angle-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="icon-angle-right"></span></button>'
	});

	$(".testimonials__inner").slick({
		arrows: false,
		dots: false,
	});

	$(".rateYo").rateYo({
		 rating: 5,
		 spacing: "15px",
		 starWidth: "18px"
	 });

	var mixer = mixitup('.gallary__inner');

});
