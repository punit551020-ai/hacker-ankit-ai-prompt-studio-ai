// Intro Slideshow Animation
let currentSlide = 1;
setInterval(() => {
    currentSlide = (currentSlide % 15) + 1;
    const slideImg = document.getElementById('intro-slide');
    if (slideImg) {
        slideImg.src = `assets/previews/${currentSlide}.svg`;
    }
}, 2500);