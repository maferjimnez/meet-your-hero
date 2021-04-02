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
      <li class="heroe" id="heroe" onClick="getSelectedHero(${heroe.id})">
        <img class="heroe__icon" src="${heroe.thumbnail.path}.${heroe.thumbnail.extension}"/>
        <p class="heroe__name">${heroe.name}</p>
      </li>
      `);
}
displayHeroes();

async function displaySelectedHero(heroe) {
  console.log(heroe);
  $heroeInfoConteiner.html(
    `
    <img src="${heroe.thumbnail.path}.${heroe.thumbnail.extension}" />
    <div class="heroe__details">
        <h1>${heroe.name}</h1>
        <p>${heroe.description}</p>
    </div>
    <div class="heroe__comics">
    </div>
    <div class="fav__button">
        <button>Add to favorite</button>
    </div>
    `
  );
}

// ** Events ** //
$seachInput.on('input', () => {
  getHeroSearch(0);
});
