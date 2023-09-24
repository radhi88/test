const ctaButton = document.querySelector("#cta button");
ctaButton.addEventListener("click", function() {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
});

const contactForm = document.querySelector("#contact form");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get
