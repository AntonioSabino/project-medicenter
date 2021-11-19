window.onload = function () {
  const menuMobile = document.querySelector('.menuMobile');
  const menuNav = document.querySelector('.menu ul');
  menuMobile.addEventListener('click', () => {
    if (menuNav.style.display === 'flex') {
      menuNav.style.display = 'none';
    } else {
      menuNav.style.display = 'flex';
    }
  });
};