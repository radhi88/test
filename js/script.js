const navbarLinks = document.querySelectorAll(".nav-links a");
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
document.addEventListener("DOMContentLoaded", function() {
    var langSwitcher = document.querySelector('.language-switcher');
    
    if (window.location.href.indexOf("index-ar.html") > -1) {
        // If on Arabic page, show English link
        langSwitcher.innerHTML = '<a href="index.html">En</a>';
    } else {
        // If on English page, show Arabic link
        langSwitcher.innerHTML = '<a href="index-ar.html">اللغة العربية</a>';
    }
});
