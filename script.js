/* ===== Sticky Navigation ===== */
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ===== Mobile Menu Toggle ===== */
const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ===== Scroll Reveal (IntersectionObserver) ===== */
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReduced) {
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

  if (revealElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(el => observer.observe(el));
  }
}

/* ===== Active Nav Link ===== */
const currentPath = window.location.pathname;
document.querySelectorAll('.nav__links a').forEach(link => {
  const href = link.getAttribute('href');
  if (!href) return;

  const isHome = (href === 'index.html' || href === '/' || href === './') &&
    (currentPath === '/' || currentPath.endsWith('/index.html') || currentPath.endsWith('/'));
  const isMatch = !isHome && href && currentPath.endsWith(href);

  if (isHome || isMatch) {
    link.classList.add('active');
  }
});
