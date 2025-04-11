
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      dots[i].classList.add("active");
    }
  });
  currentSlide = index;
}

document.querySelector(".prev").addEventListener("click", () => {
  const newIndex = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(newIndex);
});

document.querySelector(".next").addEventListener("click", () => {
  const newIndex = (currentSlide + 1) % totalSlides;
  showSlide(newIndex);
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.getAttribute("data-index")));
  });
});

setInterval(() => {
  const newIndex = (currentSlide + 1) % totalSlides;
  showSlide(newIndex);
}, 3000);
