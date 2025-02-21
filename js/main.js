document.addEventListener("DOMContentLoaded", () => {
  new Typed("#typed", {
    strings: [
      "Electrical Engineer",
      "Hard Worker",
      "Golf & Baseball Lover",
      "Embedded Systems Enthusiast",
      "C & Python Programmer",
      "Analog Circuit Explorer",
      "Data Analysis Enthusiast",
      "Cycling & Road Bike Lover",
      "Military Service Member",
      "Tufts University Student",
      "Third Culture Kid (TCK)",
      "Former SK hynix Intern",
    ],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
  });
});

const slider = document.querySelector('.projects-wrapper');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; 
  slider.scrollLeft = scrollLeft - walk;
});

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

const projectCard = document.querySelector('.project-card');
let cardWidth = 300; 
if (projectCard) {
  const cardStyles = window.getComputedStyle(projectCard);
  const cardMarginRight = parseInt(cardStyles.marginRight) || 0;
  cardWidth = projectCard.offsetWidth + cardMarginRight;
}

leftBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});
rightBtn.addEventListener('click', () => {
  slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
});


