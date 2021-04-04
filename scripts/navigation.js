// Burger menu
function displayBurgerMenu() {
  $burgerMenu.toggleClass('navbar__menu__open');
  $burgerIcon.toggleClass('fa-times');
}

function hideBurgerMenu() {
  $burgerMenu.removeClass('navbar__menu__open');
  $burgerIcon.removeClass('fa-times');
}

function displayHeroes(heroe) {
  $heroesConteiner.append(`
      <li class="heroe" id="heroe" onClick="getSelectedHero(${heroe.id})">
        <img class="heroe__icon" src="${heroe.thumbnail.path}.${heroe.thumbnail.extension}"/>
        <div class="name-wrapper">
          <p class="heroe__name">${heroe.name}</p>
        </div>
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
function displayHeroeComics(comics) {
  return comics.map(
    (comic) => `
    <img src="${comic.images[0].path}.${comic.images[0].extension}"/>
  <p>${comic.title}</p>
    `
  );
}

function displaySelectedHero(heroe, comics) {
  $loaderContainer.removeClass('hide');
  $heroeInfoConteiner.removeClass('hide').addClass('heroe__info');
  $headerContainer.addClass('hide').removeClass('header__container');
  $searchSection.addClass('hide').removeClass('search__container');
  $heroesConteiner.addClass('hide').removeClass('heores__conteiner');
  $paginationContainer.addClass('hide').removeClass('pagination-container');
  let comicData = comics[0];
  console.log(comicData);
  $heroeInfoConteiner.html(
    `
    <i id="close__details" class="far fa-times-circle fa-2x close__details" onClick="closeSelectedHero();"></i>
    <img class="heroe__image" src="${heroe.thumbnail.path}.${
      heroe.thumbnail.extension
    }" />
    <div class="heroe__details">
        <h1 class="heroe__title">${heroe.name}</h1>
        <p class="heroe__description">${heroe.description}</p>
        <div id="heroe__comics">
        ${displayHeroeComics(comicData)}
        </div>
    <div class="fav__button">
    ${
      JSON.parse(localStorage.getItem('FavouriteHeroe').includes(heroe.id))
        ? `<button class="btn" onClick="removeHeroeFromFavourites('${heroe.id}')">Remove from favorites</button>`
        : ` <button class="btn" onClick="addHeroeToFavourites('${heroe.name}', '${heroe.id}' ,'${heroe.thumbnail.path}', '${heroe.thumbnail.extension}')">Add to favorites</button>`
    }
    </div>
    </div>
    `
  );
  $loaderContainer.addClass('hide');
}

function displayFavorites(heroe) {
  $loaderContainer.removeClass('hide');
  $heroesConteiner.html('');
  $heroTitle.html('Favorites');
  $heroDescription.html('');
  $searchSection.addClass('hide').removeClass('search__container');
  $paginationContainer.addClass('hide').removeClass('pagination-container');
  let arrayFavouritesHeroe = JSON.parse(localStorage.getItem('FavouriteHeroe'));

  if (arrayFavouritesHeroe.length > 0) {
    arrayFavouritesHeroe.map((heroe) => displayHeroes(heroe));
  } else {
    $heroesConteiner.html('<h1>no hay heroes</h1>');
  }
  $loaderContainer.addClass('hide');
}

// ** Events ** //
$seachInput.on('input', () => {
  getHeroSearch(0);
});
