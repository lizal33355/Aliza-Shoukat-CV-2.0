// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Simple Fade-in Animation on Scroll
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  let triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    } else {
      card.style.opacity = 0;
      card.style.transform = "translateY(50px)";
    }
  });
});


// Run once on load
window.dispatchEvent(new Event('scroll'));
