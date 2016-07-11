$(document).ready(function(){
	console.log("ready");
	if($(window).width() < 768) {
    	$(".listItems").attr("data-toggle", "collapse");
    	$(".listItems").attr("data-target", ".navbar-collapse");
    };
	$(window).on('resize', function() {
    	if($(window).width() < 768) {
	    	$(".listItems").attr("data-toggle", "collapse");
	    	$(".listItems").attr("data-target", ".navbar-collapse");
	    }
	    else {
	    	$(".listItems").attr("data-toggle", "");
    		$(".listItems").attr("data-target", "");
	    }
	});
	$(".faq-divs").click(function() {
		$(this).find(".toggle-box").slideToggle("fast");
		$(this).find("span").toggleClass("glyphicon-minus-sign");
		$(this).find("span").toggleClass("glyphicon-plus-sign");
		$(this).find("span").toggleClass("faq-glyphicon-open");
		$(this).find("span").toggleClass("faq-glyphicon");
		$(this).find("a div").toggleClass("open");
	});
		
});