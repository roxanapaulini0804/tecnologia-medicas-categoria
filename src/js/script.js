document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel-button-right");
    const prevButton = document.querySelector(".carousel-button-left");

    // Calcula el ancho de un slide
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Coloca cada slide en su posición correcta
    slides.forEach((slide, index) => {
        slide.style.left = `${slideWidth * index}px`;
    });

    let currentSlide = 0;

    const moveToSlide = (index) => {
        track.style.transform = `translateX(-${slideWidth * index}px)`;
        currentSlide = index;
    };

    nextButton.addEventListener("click", () => {
        if (currentSlide < slides.length - 1) {
            moveToSlide(currentSlide + 1);
        }
    });

    prevButton.addEventListener("click", () => {
        if (currentSlide > 0) {
            moveToSlide(currentSlide - 1);
        }
    });
});


// Inicialización de Swiper para bloque3
document.addEventListener("DOMContentLoaded", () => {
    const swiperBloque3 = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });
});

// Scroll hacia el formulario
function scrollToForm() {
    const formElement = document.querySelector(".bloque1Form");
    if (formElement) {
        formElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
}

