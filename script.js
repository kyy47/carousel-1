const carousel = document.querySelector(".carousel");
let isDragging = false,
  startX,
  startScrollLeft;
const cardWidth = carousel.querySelector(".card").offsetWidth;

const dragging = (e) => {
  if (!isDragging) return;
  //   scrolling carousel
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");

  //   recording init
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};
const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mousemove", dragging);

const toLeft = () => {
  carousel.scrollLeft -= cardWidth;
};
const toRight = () => {
  carousel.scrollLeft += cardWidth;
};
