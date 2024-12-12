export function initializeHamburgerMenu() {
  const hamIcon = document.querySelector('#ham-icon');
  const hamCheckbox = document.querySelector('#ham-checkbox');
  const hamMenu = document.querySelector('.js-ham-menu');

  hamIcon.addEventListener('click', () => {
    if ( hamCheckbox.checked ) {
      hamMenu.classList.add('hide');
    }
    else {
      hamMenu.classList.add('show');
    }
  });

  
};