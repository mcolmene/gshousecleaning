var src = document.getElementById('reviewsTemplate').textContent;
    var data = [
            {
                "customerName" : "Alaina Miller",
                "review" : "I have known and worked with G&S House Cleaning for approximately 8 years. They are hardworking, reliable, flexible, and trustworthy. I have been consitently pleased with their service and if I have ever requested a change in anything they do, they have been very accomadating. I recommend them highly.",
                "rating" : "5"
            },
            {
                "customerName" : "Frank Rodgers",
                "review" : "We have used G&S House Cleaning for over three years. They are always on time, very professional, have their own equipment, and cleaning supplies. They do an excellent job and are always upbeat. I would highly recommend this company for your house cleaning needs.",
                "rating" : "5"
            }
    	]
    dust.renderSource(src, data, function(err, out) { 
        $("#reviewsSection").append(out);
    });
