// script.js
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel() {
    const width = track.offsetWidth;
    track.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextButton.addEventListener('click', () => {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

// Per avviare lo scorrimento automatico
setInterval(() => {
    nextButton.click();
}, 5000);
let currentSlide = 0;

function moveCarousel(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}
