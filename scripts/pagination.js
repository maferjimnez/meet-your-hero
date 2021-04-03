sessionStorage.setItem('offset', 0);

function setPaginationBtns(data, searched) {
  $paginationContainer.html('');
  const currentPage = data.data.offset / 20 + 1;
  const totalPages = Math.ceil(data.data.total / data.data.limit);
  $paginationContainer.append(`
                            <button class="change-page-btn" onclick="setPreviousPage(${searched})"><</button>
                            <p class="page-number">Page ${currentPage} of ${totalPages}</p> 
                            <button class="change-page-btn" onclick="setNextPage(${searched})">></button>
    `);
}

function setNextPage(searched) {
  $heroesConteiner.html('');
  var offset = parseInt(sessionStorage.getItem('offset'));
  offset += 20;
  sessionStorage.setItem('offset', offset);
  searched ? getSearchHero(offset) : getAllHeroes(offset);
}

function setPreviousPage(searched) {
  $heroesConteiner.html('');
  var offset = parseInt(sessionStorage.getItem('offset'));
  offset -= 20;
  sessionStorage.setItem('offset', offset);
  searched ? getSearchHero(offset) : getAllHeroes(offset);
}
