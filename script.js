window.addEventListener('scroll', () => {
  const cabecera = document.querySelector('.cabecera');
  if (window.scrollY > 50) {
    cabecera.classList.add('scrolled');
  } else {
    cabecera.classList.remove('scrolled');
  }
});
