   // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("dlBbvJXhRn94NCo1k");

        emailjs.sendForm('ramseybraimah@gmail.com', 'template_ahl1v3b', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});
