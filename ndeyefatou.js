new Typed("#type", {
  strings: ["Ndeye Fatou Mbaye", "Developer", "Intern"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});
// fin de l'animation

// pour que le navbar soit fixe est change de couleur dans les autres sections
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navbar.classList.add("bg-white", "shadow-lg");
    navbar.classList.remove("text-white");
  } else {
    navbar.classList.remove("bg-white", "shadow-lg");
    navbar.classList.add("text-white");
  }
});

// const slides = document.querySelector('.slides');
//     const dots = document.querySelectorAll('.dot');
//     let index = 0;
//     const total = dots.length;
//     function updateCarousel() {
//         slides.style.transform =
//             `translateX(-${index * 100}%)`;


    //     // Reset all dots
    //     // dots.forEach(dot => {

    //     //     dot.classList.remove('bg-black');

    //     //     dot.classList.add('bg-gray-400');

    //     // });


    //     // Active dot
    //     // dots[index].classList.remove('bg-gray-400');

    //     // dots[index].classList.add('bg-black');
    // }
    // setInterval(() => {
    //     index++;
    //     if(index >= total){
    //         index = 0;
    //     }
    //     updateCarousel();
    // }, 3000);
  
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  currentSlide = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});
setInterval(() => {
  currentSlide = (currentSlide + 1) % dots.length;
  showSlide(currentSlide);
}, 3000); // change toutes les 4 secondes

