const sections = Array.from(document.querySelectorAll('.animate-me'));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('is-loaded');
        }
    });
}, { threshold: 0 });

sections.forEach(section => {
    observer.observe(section);
});