const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const track = document.querySelector(".track");

const carouselWidth = document.querySelector(".card-container").offsetWidth;

console.log(carouselWidth)

next.addEventListener("click", () => {
  track.style.transform = `translateX(-${carouselWidth}px)`;
});

prev.addEventListener("click", () => {
  track.style.transform = `translateX(-${0}px)`;
});
