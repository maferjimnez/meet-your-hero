// Burger menu
function displayBurgerMenu() {
  $burgerMenu.toggleClass('navbar__menu__open');
  $burgerIcon.toggleClass('fa-times');
}

function hideBurgerMenu() {
  $burgerMenu.removeClass('navbar__menu__open');
  $burgerIcon.removeClass('fa-times');
}

// // Search bar
// function displaySearchSection() {
//   $searchSection.toggleClass('hide').toggleClass('search__container');
// }
