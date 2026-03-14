document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');

    if(contactForm) {
        contactForm.addEventListener('submit', function(event) {
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                alert("Thank you! Your message has been sent successfully.");
                contactForm.reset();
                contactForm.classList.remove('was-validated');
            }
            contactForm.classList.add('was-validated');
        }, false);
    }
});