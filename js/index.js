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
	
	/*Pricing javascript*/
	//Cached variables for later use
	var $serviceTotalSpan = $("#service-total"); //service total
	var $occurence = $(".occurence"); // how often buttons
	var $addons = $(".add-div");

	//changes css and adds the appropriate amont to the total for occurrence of service
	$occurence.click(function(){
		var $this = $(this);
		$(".occurence.selected").toggleClass("selected").find("span").toggleClass("selected-text");
		$this.toggleClass("selected").find("span").toggleClass("selected-text");
		switch ($this.find("span").text()) {
			case "One Time": {
				
				break;
			}
			case "Weekly" : {
				break;
			}
			case "Bi-weekly" : {
				break;
			}
			case "Monthly" : {
				break;
			}
		}
	});
	$addons.click(function() {
		var $this = $(this);
		$this.toggleClass("selected").find("span").toggleClass("selected-text");
	});
	
	var bedroomFlag, bathroomFlag, sizeFlag = false;
	var prevBedTotal = 0;
	$(".home-details").change(function(){
		var select = $(this);

		switch(select.attr("id")) {
			case "bedroom-select": {
				var serviceTotal = parseInt($serviceTotalSpan.text())
				if(bedroomFlag) {
					serviceTotal -= prevBedCost;
				}
				var bedroom = parseInt(select.val().split(" ")[0]);
				var bedroomCost = bedroom *10.50;
				console.log(bedroomCost);
				prevBedCost = bedroomCost;
				var total = serviceTotal + bedroomCost;
				var formattedOutput = total.toFixed(2)
				$serviceTotalSpan.text(formattedOutput);
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