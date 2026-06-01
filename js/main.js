const current = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.menu-item').forEach(link => {
  if (link.getAttribute('href') === current) {
    link.style.opacity = '1';
    link.style.fontWeight = '700';
  }
});

document.querySelectorAll('.top-nav-item').forEach(link => {
  if (link.getAttribute('href') === current) {
    link.classList.add('active');
  }
});
