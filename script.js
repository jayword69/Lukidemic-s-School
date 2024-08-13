document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const accordionMenu = document.getElementById('accordion-menu');
  const accordionItems = document.querySelectorAll('.accordion-item > a');

  menuIcon.addEventListener('click', () => {
    accordionMenu.classList.toggle('active');
  });

  accordionItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const content = item.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
});
