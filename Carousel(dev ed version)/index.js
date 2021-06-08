const carouselSlide = document.querySelector(".carousel__slide");
const carouselImages = document.querySelectorAll(".carousel__slide img");

//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

//Button Listners
nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.2s ease-in-out";
  counter++;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    //for a smoother transition
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
  if (carouselImages[counter].id === "firstClone") {
    //for a smoother transition
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    console.log(carouselImages.length, counter);
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
});
