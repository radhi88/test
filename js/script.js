const navbarLinks = document.querySelectorAll("#navbar a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset > (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }
    });

    navbarLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substr(1) === current) {
            link.classList.add("active");
        }
    });
});

const ctaButton = document.querySelector("#cta button");
ctaButton.addEventListener("click", function() {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
});
