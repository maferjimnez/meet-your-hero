// Burger menu
function displayBurgerMenu() {
  $burgerMenu.toggleClass('navbar-menu-open');
  $burgerIcon.toggleClass('fa-times');
}

function hideBurgerMenu() {
  $burgerMenu.removeClass('navbar-menu-open');
  $burgerIcon.removeClass('fa-times');
}

function displayHeroes(heroe) {
  window.scrollTo({ top: 0, behavior: 'auto' });
  $heroesConteiner.append(`
      <li class="heroe" id="heroe" onClick="getSelectedHero(${heroe.id})">
        <img class="heroe-icon" src="${heroe.thumbnail.path}.${heroe.thumbnail.extension}"/>
        <div class="name-wrapper">
          <p class="heroe-name">${heroe.name}</p>
        </div>
      </li>
      `);
}

function closeSelectedHero() {
  window.scrollTo({ top: 0, behavior: 'auto' });
  $loaderContainer.removeClass('hide').addClass('loader-container');
  $heroeInfoConteiner.removeClass('heroe-info').addClass('hide');
  $footerContainer.removeClass('hide').addClass('footer-container');
  $headerContainer.removeClass('hide').addClass('header-container');
  $searchSection.removeClass('hide').addClass('search-container');
  $heroesConteiner.removeClass('hide').addClass('heores-conteiner');
  $paginationContainer.addClass('pagination-container').removeClass('hide');
  $loaderContainer.addClass('hide').removeClass('loader-container');
}

function displayHeroeComics(comics) {
  return comics.map(
    (comic) => `
    <div class="comic-wrapper">
      <img class="img-comic" src="${comic.images[0].path}.${comic.images[0].extension}"/>
      <p class="title-comic">${comic.title}</p>
    </div>
    `
  );
}

function displaySelectedHero(heroe, comics) {
  $loaderContainer.removeClass('hide').addClass('loader-container');
  window.scrollTo({ top: 0, behavior: 'auto' });
  $heroeInfoConteiner.removeClass('hide').addClass('heroe-info');
  $footerContainer.addClass('hide').removeClass('footer-container');
  $headerContainer.addClass('hide').removeClass('header-container');
  $searchSection.addClass('hide').removeClass('search-container');
  $heroesConteiner.addClass('hide').removeClass('heores-conteiner');
  $paginationContainer.addClass('hide').removeClass('pagination-container');
  let comicData = comics[0];
  console.log(comicData);
  $heroeInfoConteiner.html(
    `
    <i id="close-details" class="far fa-times-circle fa-2x close-details" onClick="closeSelectedHero();"></i>
    <img class="heroe-image" src="${heroe.thumbnail.path}.${
      heroe.thumbnail.extension
    }" />
    <div class="heroe-details">
        <h1 class="heroe-title">${heroe.name}</h1>
        <p class="heroe-description">${
          heroe.description == ''
            ? `${heroe.description}`
            : `We've been trying to write a description for this character for a long time and we still haven't came out with something, we are sorry...`
        }</p>
        <div class="heroe-comics">
          <h2 class="comics-title">Appears on:</h2>
          <div class="comics-wrapper">
          ${displayHeroeComics(comicData)}
          </div>
        </div>
    <div class="fav-button">
    ${
      JSON.parse(localStorage.getItem('FavouriteHeroe').includes(heroe.id))
        ? `<button class="btn" onClick="removeHeroeFromFavourites('${heroe.id}')">Remove from favorites</button>`
        : ` <button class="btn" onClick="addHeroeToFavourites('${heroe.name}', '${heroe.id}' ,'${heroe.thumbnail.path}', '${heroe.thumbnail.extension}')">Add to favorites</button>`
    }
    </div>
    </div>
    `
  );
  $loaderContainer.addClass('hide').removeClass('loader-container');
}

function displayFavorites(heroe) {
  $loaderContainer.removeClass('hide');
  window.scrollTo({ top: 0, behavior: 'auto' });
  closeSelectedHero();
  $heroesConteiner.html('');
  $heroTitle.html('Favorites');
  $heroDescription.html('');
  $searchSection.addClass('hide').removeClass('search-container');
  $paginationContainer.addClass('hide').removeClass('pagination-container');
  let arrayFavouritesHeroe = JSON.parse(localStorage.getItem('FavouriteHeroe'));

  if (arrayFavouritesHeroe.length > 0) {
    arrayFavouritesHeroe.map((heroe) => displayHeroes(heroe));
  } else {
    const errorMessage = "You don't have any favorites superheroes yet.";
    displayError(errorMessage);
  }
  $loaderContainer.addClass('hide');
}

function displayError(error) {
  $paginationContainer.addClass('hide').removeClass('pagination-container');
  $heroesConteiner.html(`
  <div class="error-container">
    <img class="error-img" src="/assets/thanos-glove.jpg"/>
    <h2 class="error-title">Ow snap!</h2>
    <p class="error-text">${error}</p>
    <a class="error-btn" href="index.html">Go home</a>
  </div>
  `);
}
