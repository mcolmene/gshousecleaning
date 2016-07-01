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
		
});