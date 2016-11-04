$(document).ready(function(){
	// $("#btn").click(function(){
	// 	$(".pricingHeaders").css("z-index", -1);
	// })
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
	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	})
	//MODALS
	var $careerModal = $("#careerModal");
	var $servicesModal = $("#servicesModal")
	//---------------- HOME Section ----------------//

	//---------------- HOW IT WORKS functions ----------------//

	//---------------- PRICING functions ----------------//
		//Pricing cached variables 
		var $serviceTotalSpan = $("#service-total"); //service total
		var $occurence = $(".occurence"); // how often buttons
		var $addons = $(".add-div");
		var $homeDetails = $(".home-details");
		var $infoServices = $("#infoServices");
		//Select boxes
		var $bedSelect = $("#bedroom-select");
		var $bathSelect = $("#bathroom-select");

		//buttons
		var $costReset = $("#costReset");
		var $scrollDownBtn = $("#scrollDownBtn");

		$scrollDownBtn.click(scrollDownClick);

		function scrollDownClick() {
			$("body").animate({scrollTop : 500},'slow');
			$scrollDownBtn.hide();
		}
		$(window).scroll(function(){
			if($(window).scrollTop() == 0 && $(window).width() >= 830) {
				$scrollDownBtn.show();
			}
			else {
				$scrollDownBtn.hide();
			}
		})
		//PRICING bindings
		$occurence.click(occurenceClick);
		$addons.click(addonClick);
		$homeDetails.change(homeDetailsChange);
		$costReset.click(resetEstimate);
		$infoServices.click(showServicesModal);
				//PRICING functions

		//changes css and adds the appropriate amont to the total for occurrence of service
		var occurrenceMultiplier = 1;
		var oneTimeFlag = false;
		function occurenceClick() {
			var $this = $(this);
			$(".occurence.selected").toggleClass("selected").find("span").toggleClass("selected-text");
			$this.toggleClass("selected").find("span").toggleClass("selected-text");
			var serviceTotal = parseFloat($serviceTotalSpan.text()); //grabs current total of estimate
			switch ($this.find("span").text()) {
				case "One Time": {
						if(!oneTimeFlag) {
							costCalculate((serviceTotal * 2), 0);
							oneTimeFlag = true;
						}
					break;
				}
				case "Weekly" : {
					occurrenceMultiplier = 1;
					recalculateOccurence(serviceTotal);
					break;
				}
				case "Bi-weekly" : {
					occurrenceMultiplier = 1;
					recalculateOccurence(serviceTotal);
					break;
				}
				case "Monthly" : {
					occurrenceMultiplier = 1;
					recalculateOccurence(serviceTotal);
					break;
				}
			}
		};
		function recalculateOccurence(serviceTotal) {
			if(oneTimeFlag) {
				oneTimeFlag = false;
				costCalculate((serviceTotal / 2), 0)
			}
		}

		var baseBoardFlag = false;
		var fridgeFlag = false;
		var ovenFlag = false;
		var baseBoardsPrice = 25;
		var fridgePrice = 20;
		var ovenPrice = 15;
		function addonClick() {
			var $this = $(this);
			$this.toggleClass("selected").find("span").toggleClass("selected-text");
			var serviceTotal = parseFloat($serviceTotalSpan.text()); //grabs current total of estimate
			if(oneTimeFlag) {
				serviceTotal = serviceTotal/2;
			}
			switch ($this.attr("addon")) {
				case "baseBoards" : {
					if(baseBoardFlag) {
						baseBoardFlag = false;
						serviceTotal -= baseBoardsPrice;
						costCalculate(serviceTotal, 0);
					}
					else {
						costCalculate(serviceTotal, baseBoardsPrice);
						baseBoardFlag = true;
					}
					break;
				}
				case "insideFridge" : {
					if(fridgeFlag) {
						fridgeFlag = false;
						serviceTotal -= fridgePrice;
						costCalculate(serviceTotal, 0);
					}
					else {
						costCalculate(serviceTotal, fridgePrice)
						fridgeFlag = true;
					}
					break;
				}
				case "insideOven" : {
					if(ovenFlag) {
						ovenFlag = false;
						serviceTotal -= ovenPrice;
						costCalculate(serviceTotal, 0);
					}
					else {
						costCalculate(serviceTotal, ovenPrice)
						ovenFlag = true;
						
					}
					break;
				}
			}
		};
	   
		var bedroomFlag, bathroomFlag, sizeFlag = false;
		var prevBedCost = 0;
		var prevBathCost = 0;
		var costOfBedroom = 14.50;
		var costOfBathroom = 10.50;
		function homeDetailsChange() {
			var select = $(this);
			var value = select.val();
			var serviceTotal = parseFloat($serviceTotalSpan.text()); //grabs current total of estimate
			if(oneTimeFlag) {
				serviceTotal = serviceTotal/2;
			}
			switch(select.attr("id")) {
				case "bedroom-select": {
					if(value != "How many bedrooms?") {
						if(bedroomFlag) {
							serviceTotal -= prevBedCost;
						}
						var bedroom = parseInt(value.split(" ")[0]);
						var bedroomCost = bedroom * costOfBedroom;
						prevBedCost = bedroomCost;
						
						costCalculate(serviceTotal, bedroomCost);
						bedroomFlag = true;
						
					}
					else {
						resetBedroomCost(serviceTotal);
					}
					break;
				}
				case "bathroom-select": {
					if(value != "How many bathrooms?") {
						if(bathroomFlag) {
							serviceTotal -= prevBathCost;
						}
						var bathroom = parseInt(value.split(" ")[0]);
						var bathroomCost = bathroom * costOfBathroom;
						prevBathCost = bathroomCost;
						costCalculate(serviceTotal, bathroomCost);
						bathroomFlag = true;
					}
					else {
						resetBathroomCost(serviceTotal);
					}
					break;
				}
			}
		};	
		function costCalculate(serviceTotal, itemCost) {
			var total = serviceTotal + itemCost;
			if(oneTimeFlag) {
				total = total * 2;
			}
			var formattedOutput = total.toFixed(2)
			$serviceTotalSpan.text(formattedOutput);
		}
		function resetEstimate() {
			bathroomFlag = false;
			bedroomFlag = false;
			sizeFlag = false;
			baseBoardFlag = false;
			fridgeFlag = false;
			ovenFlag = false;
			prevBathCost = 0;
			prevBedCost = 0;

			$bedSelect.val("How many bedrooms?");
			$bathSelect.val("How many bathrooms?");
			$(".selected").toggleClass("selected").find("span").toggleClass("selected-text");
			$serviceTotalSpan.text("0.00");
			//reset all the values on the estimate
		}
		function resetBathroomCost (serviceTotal) {
			serviceTotal -= prevBathCost;
			prevBathCost = 0;
			costCalculate(serviceTotal, 0);
		}
		function resetBedroomCost (serviceTotal) {
			serviceTotal -= prevBedCost;
			prevBedCost = 0;
			costCalculate(serviceTotal, 0);
		}

	//---------------- CONTACT US functions ----------------//


	//---------------- FAQS Section ----------------//
		//FAQ cached variables
		var $faqDivs = $(".faq-divs");

		//FAQ bindings
		$faqDivs.click(faqClick);

		//FAQ functions
		function faqClick() {
			$(this).find(".toggle-box").slideToggle("fast");
			$(this).find("span").toggleClass("glyphicon-minus-sign");
			$(this).find("span").toggleClass("glyphicon-plus-sign");
			$(this).find("span").toggleClass("faq-glyphicon-open");
			$(this).find("span").toggleClass("faq-glyphicon");
			$(this).find("a div").toggleClass("open");
		};
	//---------------- FOOTER functions ----------------//

		//footer links
		var $serviceLink = $(".services");
		var $pricingTool = $(".pricingTool");
		var $howItWorksLink = $("#howItWorksLink");
		var $couponsLink = $("#coupons");
		var $careerLink = $("#careers");
		var $termsLink = $("#terms");
		var $privacyLink = $("#privacy");
		var $faqLink = $("#faqsLink");
		var $contactLink = $("#contactLink");

		//footer bindings
		$howItWorksLink.click(showTab);
		$contactLink.click(showTab);
		$faqLink.click(showTab);
		$pricingTool.click(showTool);

		$careerLink.click(showCareerModal);
		$serviceLink.click(showServicesModal)
		function showTool() {
			$(".nav-pills a[href='#pricing']").tab('show');
			$("body").scrollTop(0);
		}
		//footer functions
		function showTab() {
			var tab = $(this).attr("id");
			switch(tab) {
				case "howItWorksLink" : {
					tab = "howItWorks";
					break;
				}
				case "faqsLink" : {
					tab = "faqs";
					break;
				}
				case "contactLink" : {
					tab = "contactUs";
					break;
				}
			}
			$(".nav-pills a[href='#"+ tab +"']").tab('show');
			$("body").scrollTop(0);
			//$("body").animate({ scrollTop: 0 }, 600);
		}
		function showCareerModal() {
			$careerModal.modal("show");
		}
		function showServicesModal() {
			$servicesModal.modal('show');
		}
	
	
});