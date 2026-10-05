const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    if (isOpen) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Close navigation menu");
        menuToggle.setAttribute("aria-expanded", "true");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.setAttribute("aria-expanded", "false");
    }
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// Kikkes Scents image slider

const kikkesImages = [
    "images/kikkes-scents-1.jpg",
    "images/kikkes-scents-2.jpg",
    "images/kikkes-scents-3.jpg"
];

let kikkesIndex = 0;

const kikkesSlider = document.querySelector("#kikkes-slider");

setInterval(function () {

    kikkesSlider.style.opacity = "0";

    setTimeout(function () {

        kikkesIndex++;

        if (kikkesIndex >= kikkesImages.length) {
            kikkesIndex = 0;
        }

        kikkesSlider.src = kikkesImages[kikkesIndex];

        kikkesSlider.style.opacity = "1";

    }, 500);

}, 3000);


// Student Results image slider

const studentImages = [
    "images/student-results-1.jpg",
    "images/student-results-2.jpg",
    "images/student-results-3.jpg"
];

let studentIndex = 0;

const studentSlider = document.querySelector("#student-slider");

setInterval(function () {

    studentSlider.style.opacity = "0";

    setTimeout(function () {

        studentIndex++;

        if (studentIndex >= studentImages.length) {
            studentIndex = 0;
        }

        studentSlider.src = studentImages[studentIndex];

        studentSlider.style.opacity = "1";

    }, 500);

}, 3000);