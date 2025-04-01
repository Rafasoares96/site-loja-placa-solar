window.addEventListener("load", function () {
    document.querySelector(".loader").classList.add("hidden");
});
 const carousel = document.getElementById("carousel");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");

        let index = 0;
        const totalItems = document.querySelectorAll(".carousel-item").length;
        const itemWidth = document.querySelector(".carousel-item").offsetWidth;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${index * itemWidth}px)`;
        }

        nextBtn.addEventListener("click", () => {
            if (index < totalItems - 1) {
                index++;
                updateCarousel();
            }
        });

        prevBtn.addEventListener("click", () => {
            if (index > 0) {
                index--;
                updateCarousel();
            }
        });

        // Ajusta o carrossel ao redimensionar a tela
        window.addEventListener("resize", () => {
            updateCarousel();
        });

       
    
    








document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const itemWidth = document.querySelector('.carousel-item').offsetWidth + 10; // Largura do item + espaçamento

    nextBtn.addEventListener('click', function () {
        carousel.scrollBy({ left: itemWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', function () {
        carousel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    });
});

  
  