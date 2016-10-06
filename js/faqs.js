
    var src = document.getElementById('faqsTemplate').textContent;
    // Compile the template under the name 'hello'
    var data = {
       "faqHeaders" : [
           {
               "header1" : "Booking",
               "header2" : "Pricing",
               "header3" : "The day of cleaning",
               "header4" : "Additional Services",
               "header5" : "Other"
           }
       ],
       "booking" : [
           {
               "faq" : " How does booking work?",
               "answer": "You have the option of using our online price estimate to get an idea of what the cost of the service will be. Then you can call us at (602) 332-3259 where you can schedule an appointment to evaluate your house. After the evaluation we will give you a confirmed price on service and discuss any further details at the time of the meeting.",
               "id" : "1"
           },
           {
               "faq" : " How can I know which days are available to get my house cleaned?",
               "answer": "Our services are offered through our normal business hours Monday through Friday. To find specific availability please call our number at (602) 332-3259.",
                "id" : "2"
           }
       ],
        "pricing" : [
           {
               "faq" : " How do you calculate the price of the service?",
               "answer": "We have a flat rate based on the number of rooms of the home. If it is the first time that you will be getting your house cleaned by us we will assess if any additional charges are needed. For more information please call (602) 332-3259.",
                "id" : "1"
           },
           {
               "faq" : " Do you have a cancelation policy?",
               "answer": "Yes. Our cancelation policy is we require at least a 24 hour notice of a cancelation. If it is within the 24 hour window there will be a cancelation fee of 50% of the total cost of the day's service.",
                "id" : "2"
           },
           {
               "faq" : " What method of payment do you accept?",
               "answer": "We accept cash payments, checks and major credit cards. Credit cards will be charged an additional 2.75%.",
                "id" : "3"
           },
            {
               "faq" : " How do I use a coupon or a referral discount?",
               "answer": "When the evaluation is being done on your house you can show the coupon where we will apply it before you pay. No need to print.",
                "id" : "4"
           }
       ],
        "cleaning" : [
            {
               "faq" : " How many cleaners should arrive for my appointment?",
               "answer": "There will be two-three cleaners who will come to your home and ensure that a quality clean is done to your home. You will get to know who your cleaners are at the time you schedule your appointment. We certify that our cleaners are trustworthy and trained to clean your home.",
                "id" : "1"
           },
           {
               "faq" : " How long will my cleaning appointment take?",
               "answer": "We will give you an estimate at the time we evaluate your home. Average time for new homes receiving our service for the first time is three hours to ensure quality. After, recurring service averages from one to two hours depending on the size of the home.",
                "id" : "2"
           },
           {
               "faq" : " Do I need to be home during the cleaning?",
               "answer": "You do not need to be home at the time of the service. We do require payment before the service starts. In the case that you will not be home you can leave the payment in designated area that you discuss with the cleaners.",
                "id" : "3"
           },
           {
               "faq" : " What will the cleaners not clean in a standard service?",
               "answer": "See all the services that we provide by clicking 'Our Services' below, the home page or by click on the '?' next to 'Estimate your cleaning.' Anything else that you would like to be clean can be considred, but will incur extra charges.",
                "id" : "4"
           },
           {
               "faq" : " Do I tip the house cleaners?",
               "answer": "There is no need to tip the cleaners since they are paid employees of G & S House Cleaning.",
                "id" : "4"
           }
        ],
        "additional" : [
            {
               "faq" : " What are considered additional services?",
               "answer": "Additional services include cleaning the inside of the fridge, base boards and inside oven. The prices can vary.",
                "id" : "1"
           },
           {
               "faq" : " Are there reminders about my service?",
               "answer": "We extend the courtesy to our customers of giving them a reminder about their scheduled service 24 hours in advanced. If you would like to opt out of this service please let one of representatives know to take you off our list.",
                "id" : "2"
           }
        ],
        "other" : [
            {
               "faq" : " Air conditioning, electricity, hot water and Lock-outs",
               "answer": "All appointments must allow the cleaners to have access to the property during the appointment time.  Customers must also ensure there is electricity and hot water in the home. In addition, the air conditioning in the home must be functioning between the months of April and November. If any of the these conditions are not met by the customer, the cleaners may choose to not complete the service and G&S House Cleaning may collect and charge the full price of the appointment. If the customer reschedules their appointment and remedies the condition, 50% of the collected amount may go towards the cost of the newly scheduled appointment.",
                "id" : "1"
           },
           {
               "faq" : " Lifting of heavy items or hard to reach areas",
               "answer": "Our cleaners will not move anything heavier than 30lbs. If you would like the cleaners to clean behind large items such as refridgerators, ovens or large furniture, please move those items prior to your appointment.",
                "id" : "2"
           },
           {
               "faq" : " Pet waste clean up",
               "answer": "An additional fee will be collected if a cleaner is asked to clean or remove pet waste or urine. The charge will be a flat rate depending on the extent of the incident.",
                "id" : "2"
           },

           {
               "faq" : " Loss or broken items policy",
               "answer": "If loss or damage to your property occurs, notification to G & S House cleaning should be made within 48 hours of the incident. You can communicate via email or phone. Once you have notified us we will send you a form to fill out and the form needs to be returned to us within 10 days of the incident.",
                "id" : "2"
           }
        ]
    }
    dust.renderSource(src, data, function(err, out) { 
        $("#faqsDiv").append(out);
    });
