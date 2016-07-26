
    var src = document.getElementById('faqsTemplate').textContent;
    // Compile the template under the name 'hello'
    var data = {
       "faqHeaders" : [
           {
               "header1" : "Booking",
               "header2" : "Pricing",
               "header3" : "The day of cleaning",
               "header4" : "Additional Services"
           }
       ],
       "booking" : [
           {
               "faq" : " How does booking work?",
               "answer": "we are going to put something here 1",
               "id" : "1"
           },
           {
               "faq" : " How can I know which days are available to get my house cleaned?",
               "answer": "we are going to put something here 2",
                "id" : "2"
           },
           {
               "faq" : " hello we are number 3",
               "answer": "we are going to put something here 3",
                "id" : "3"
           }
       ],
        "pricing" : [
           {
               "faq" : " How do you calculate the price of the service?",
               "answer": "we are going to put something here 1",
                "id" : "1"
           },
           {
               "faq" : " Do you have a cancelation policy?",
               "answer": "we are going to put something here 2",
                "id" : "2"
           },
           {
               "faq" : " What method of payment do you accept?",
               "answer": "we are going to put something here 3",
                "id" : "3"
           },
            {
               "faq" : " How do I use a coupon or a referral discount?",
               "answer": "we are going to put something here 3",
                "id" : "4"
           }
       ],
        "cleaning" : [
            {
               "faq" : " How many cleaners should arrive for my appointment?",
               "answer": "we are going to put something here 1",
                "id" : "1"
           },
           {
               "faq" : " How long will my cleaning appointment take?",
               "answer": "we are going to put something here 2",
                "id" : "2"
           },
           {
               "faq" : " Do I need to be home during the cleaning?",
               "answer": "we are going to put something here 3",
                "id" : "3"
           },
           {
               "faq" : " What will the cleaners not clean in a standard service?",
               "answer": "we are going to put something here 3",
                "id" : "4"
           }
        ],
        "additional" : [
            {
               "faq" : " What are considered additional services?",
               "answer": "we are going to put something here 1",
                "id" : "1"
           },
           {
               "faq" : " How can I know which days are available to get my house cleaned?",
               "answer": "we are going to put something here 2",
                "id" : "2"
           }
        ]
    }
    dust.renderSource(src, data, function(err, out) { 
        $("#faqsDiv").append(out);
    });
