document.addEventListener("DOMContentLoaded", () => {
    // Inicialización de Swiper
    const swiperBloque3 = new Swiper(".swiper-bloque3", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination-bloque3",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next-bloque3",
            prevEl: ".swiper-button-prev-bloque3",
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

document.addEventListener("DOMContentLoaded", () => {
    // Inicialización de Swiper para bloque 5
    const bloque5Element = document.querySelector(".swiper-bloque5");
    if (bloque5Element) {
        const swiperBloque5 = new Swiper(".swiper-bloque5", {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination-bloque5",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next-bloque5",
                prevEl: ".swiper-button-prev-bloque5",
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
    } else {
        console.warn("No se encontró el contenedor para el bloque 5 (swiper-bloque5).");
    }
});
