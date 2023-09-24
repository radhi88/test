document.addEventListener("DOMContentLoaded", function() {
    // Get the contact button by its tag name (assuming it's the only button in the header)
    const contactBtn = document.querySelector("header button");

    // Add a click event listener to the button
    contactBtn.addEventListener("click", function() {
        // Scroll to the contact section when the button is clicked
        const contactSection = document.getElementById("contact");
        contactSection.scrollIntoView({ behavior: "smooth" });
    });

    // Get the form element
    const contactForm = document.querySelector("section#contact form");

    // Add a submit event listener to the form
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        alert("Thank you for reaching out! We'll get back to you soon.");
        contactForm.reset(); // Reset the form fields
    });
});
