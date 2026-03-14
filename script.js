document.addEventListener("DOMContentLoaded", function() {
    let myCarousel = document.querySelector('#slider');
    let carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000, 
        wrap: true,
        pause: 'hover' 
    });
});