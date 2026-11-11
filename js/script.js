
// Scroll reveal animation

const revealElements = document.querySelectorAll(
    '.jet-card, .aircraft-card, .gallery-item, .intro-image'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
});
