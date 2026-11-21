// Toggle the mobile menu
{
  const menu = document.getElementById('myTopnav');
  const button = menu.querySelector('.icon');
  button.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('responsive');
    button.setAttribute('aria-expanded', isOpen);
  });
}
