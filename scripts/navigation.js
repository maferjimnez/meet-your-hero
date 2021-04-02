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

function displayHeroes(heroe) {
  $heroesConteiner.append(`
      <li class="heroe" id="heroe">
        <img class="heroe__icon" src="${heroe.thumbnail.path}.${heroe.thumbnail.extension}"/>
        <p class="heroe__name">${heroe.name}</p>
      </li>
      `);
}
displayHeroes();

// ** Events ** //
$seachInput.on('input', () => {
  getHeroSearch(0);
});
