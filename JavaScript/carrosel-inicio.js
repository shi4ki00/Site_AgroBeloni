document.addEventListener('DOMContentLoaded', function () {
    
    var swiper = new Swiper(".mySwiper", {
        effect: "fade", 
        
        fadeEffect: { 
            crossFade: true 
        },

        loop: true,

        speed: 1000,

        autoplay: {
            delay: 4000, 
            disableOnInteraction: false, 
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        
        // Se quiser setas de navegação no futuro, basta descomentar abaixo:
        /*
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        */
    });

});


