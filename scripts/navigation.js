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

function closeSelectedHero() {
  $heroeInfoConteiner.removeClass('heroe__info').addClass('hide');
  $headerContainer.removeClass('hide').addClass('header__container');
  $searchSection.removeClass('hide').addClass('search__container');
  $heroesConteiner.removeClass('hide').addClass('heores__conteiner');
}

async function displaySelectedHero(heroe) {
  $heroeInfoConteiner.removeClass('hide').addClass('heroe__info');
  $headerContainer.addClass('hide').removeClass('header__container');
  $searchSection.addClass('hide').removeClass('search__container');
  $heroesConteiner.addClass('hide').removeClass('heores__conteiner');

  $heroeInfoConteiner.html(
    `
    <i id="close__details" class="far fa-times-circle fa-2x close__details" onClick="closeSelectedHero();"></i>
    <img class="heroe__image" src="${heroe.thumbnail.path}.${heroe.thumbnail.extension}" />
    <div class="heroe__details">
        <h1 class="heroe__title">${heroe.name}</h1>
        <p class="heroe__description">${heroe.description}</p>
    <div class="heroe__comics">
    </div>
    <div class="fav__button">
        <button class="btn">Add to favorite</button>
    </div>
    </div>
    `
  );
}

// ** Events ** //
$seachInput.on('input', () => {
  getHeroSearch(0);
});
