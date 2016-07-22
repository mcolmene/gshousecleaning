$(document).ready(function(){
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
	//Cached variables for later use
	var serviceTotalSpan = $("#service-total"); //service total

	var bedroomFlag, bathroomFlag, sizeFlag = false;
	var prevBedTotal = 0;
	$(".home-details").change(function(){
		var select = $(this);

		switch(select.attr("id")) {
			case "bedroom-select": {
				var serviceTotal = parseInt(serviceTotalSpan.text())
				if(bedroomFlag) {
					serviceTotal -= prevBedCost;
				}
				var bedroom = parseInt(select.val().split(" ")[0]);
				var bedroomCost = bedroom *10.50;
				console.log(bedroomCost);
				prevBedCost = bedroomCost;
				var total = serviceTotal + bedroomCost;
				var formattedOutput = total.toFixed(2)
				serviceTotalSpan.text(formattedOutput);
				bedroomFlag = true;
				break;
			}
			case "bathroom-select": {
				break;
			}
			case "size-select": {
				break;
			}
		}
	});	
});