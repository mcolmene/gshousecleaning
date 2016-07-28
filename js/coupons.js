var src = document.getElementById('couponsTemplate').textContent;
    // Compile the template under the name 'hello'
    var data = { 
    	"couponHeader" : "Our exclusive online deals just for you!",
    	"coupons" : [
    		{
    			"couponValue" : "10%",
    			"coupon" : "Off your first cleaning service",
    			"description" : "Set up your first cleaning with us and you will get 10% off your total cleaning services!"
    		},
    		{
    			"couponValue" : "$20.00",
    			"coupon" : "Off your next cleaning service",
    			"description" : "Refer a friend or a family member to our services and we will take off 20 dollars off your next cleaning!"
    		}
    	],
    	"desclaimer" : "*coupons are subject to change and deemed invalid under certain circumstances. Please consult with our office. Must present this coupon before service begins."
    }
    dust.renderSource(src, data, function(err, out) { 
        $("#couponsDiv").append(out);
    });
