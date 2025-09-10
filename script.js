document.addEventListener('DOMContentLoaded', () => {
  const btt = document.querySelector('.back-to-top');
  if (!btt) return;

  const TOGGLE_AT = 300; // px scrolled before showing the button
  function toggleBTT() {
    if (window.scrollY > TOGGLE_AT) btt.classList.remove('is-hidden');
    else btt.classList.add('is-hidden');
  }
  toggleBTT();
  window.addEventListener('scroll', toggleBTT);
});
