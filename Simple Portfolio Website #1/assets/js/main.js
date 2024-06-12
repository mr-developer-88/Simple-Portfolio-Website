// MENU SHOW FUNCTION
const toggleNavMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    toggle?.addEventListener('click', () => nav?.classList.toggle('show'));
}
toggleNavMenu('nav-toggle', 'nav-menu');

// Remove Menu Mobile
document.getElementById('nav-menu').addEventListener("click", ({target}) => {
    const link = target.closest('.nav-link');
    if(link) {
        document.querySelector('.nav-link.active')?.classList.remove('active');
        link.classList.toggle('active', top <= 50 && bottom >= 50);
    }
});

// SCROLL  SECTION ACTIVE LINK SETUP
const scrollActive = () => {
    const scrollY= window.pageYOffset;
    document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
        const section = document.getElementById(link.getAttribute('href').slice(1));
        if(section) {
            const {top, bottom} = section.getBoundingClientRect();
            link.classList.toggle('active', top <= 50 && bottom >= 50);
        };
    });
};
window.addEventListener('scroll', scrollActive);

// SCROLL REVEAL ANIMATION
const revealAnimation = () => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
    });
    sr.reveal('.home-data, .about-img, .skills-subtitle, skills-text',{});
    sr.reveal('.home-img, .about-subtitle, .about-text, .skills-img', {delay: 400});
    sr.reveal('.home-social-icon,', {interval: 200});
    sr.reveal('.skills-data, .work-img, .contact-input', {interval: 200});
}

revealAnimation();