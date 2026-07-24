console.log("Portfolio Website Loaded Successfully");

function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {
    const target = Number(circle.dataset.percent);
    let count = 0;

    const timer = setInterval(() => {
        count++;

        circle.textContent = count + "%";

        if (count >= target) {
            clearInterval(timer);
        }
    }, 20);
});

const cards = document.querySelectorAll(".project-card");


function reveal(){

cards.forEach(card=>{

let position = card.getBoundingClientRect().top;

let screen = window.innerHeight - 100;


if(position < screen){

card.classList.add("show");

}

});

}


window.addEventListener("scroll",reveal);

reveal();

/*=============== EMAIL JS ===============*/

emailjs.init("m-O5nPPA82bACgLvp");

const contactForm = document.getElementById("contact-form");
const submitBtn = contactForm.querySelector("button");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    submitBtn.innerHTML = "Sending...";
    submitBtn.disabled = true;

    emailjs.sendForm(
        "service_jmv0o37",
        "template_l4axvmp",
        this
    )

    .then(() => {

        submitBtn.innerHTML = "✅ Message Sent";

        contactForm.reset();

        setTimeout(() => {

            submitBtn.innerHTML =
            '<i class="fa-solid fa-paper-plane"></i> Send Message';

            submitBtn.disabled = false;

        },3000);

    })

    .catch(() => {

        submitBtn.innerHTML = "❌ Try Again";

        setTimeout(() => {

            submitBtn.innerHTML =
            '<i class="fa-solid fa-paper-plane"></i> Send Message';

            submitBtn.disabled = false;

        },3000);

    });

});
/*=============== SCROLL REVEAL ===============*/

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if(sectionTop < windowHeight - revealPoint){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

/*=============== ACTIVE NAVBAR ===============*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop &&
           window.scrollY < sectionTop + sectionHeight){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});