/* ================================
   Fade-Up Animation on Scroll
================================ */
const fadeUps = document.querySelectorAll('.fade-up');

const showOnScroll = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

fadeUps.forEach(el => showOnScroll.observe(el));


/* ================================
   Smooth Scroll for Anchor Links
================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;

        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});


/* ================================
   Hero Fade-In on Load
================================ */
window.addEventListener('load', () => {
    const hero = document.querySelector('.top-hero');
    if (hero) {
        hero.style.opacity = 1;
        hero.style.transform = "translateY(0)";
    }
});
