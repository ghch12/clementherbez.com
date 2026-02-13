document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) return;

  const profile = document.querySelector('.profile');
  const links = document.querySelectorAll('.link-button');

  // Animate profile header
  setTimeout(() => {
    profile.classList.add('animate-in');
  }, 100);

  // Stagger animate each link button
  links.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add('animate-in');
    }, 300 + index * 80);
  });
});
