window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {
        loader.classList.add("hide");
    }, 2400);

});


const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("open");
});


document.querySelectorAll(".nav-menu a").forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
    });

});


const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {
    revealObserver.observe(element);
});


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


const contactForm =document.getElementById("contactForm");
const formMessage =document.getElementById("formMessage");
contactForm.addEventListener("submit",function(event) {
    event.preventDefault();
    const name=contactForm.querySelector('input[type="text"]').value;
    const email=contactForm.querySelector('input[type="email"]').value;
    const message=contactForm.querySelector('input[type="textarea"]').value;
    const subject=encodeURIComponent("Portfolio message from " +name);
    const body= encodeURIComponent("Name:" +name + "\n"+ 
        "Email:" + email + "\n\n" +
        "Message:\n" + message
    );
    window.location.href="mailto:latharagaviselvam2007@gmail.com"+
    "?subject="+ subject + "&body=" + body;


});


document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});