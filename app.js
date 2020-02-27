const imges = document.querySelectorAll('.slider-wrap img');
const slideContainer = document.querySelector('.slider-wrap');

const next = document.querySelector('.nextBtn');

const size = imges[0].clientWidth;
let counter = 1;

slideContainer.style.transform = `translateX(${-size * counter}px)`;

next.addEventListener('click', () => {
  slideContainer.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  slideContainer.style.transform = `translateX(${-size * counter}px)`;
});

slideContainer.addEventListener('transitionend', () => {
  if (imges[counter].className === 'lastClon') {
    slideContainer.style.transition = 'none';
    counter = 1;
    slideContainer.style.transform = `translateX(${-size * counter}px)`;
  }
});

// setInterval(() => slideRight(), 1000);
