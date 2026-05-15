// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .feature, .price-card, .audience__card, .founder, .faq__item').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Smooth anchor scroll handled by CSS scroll-behavior: smooth
