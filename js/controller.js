import Movies from './Modal/Movie';
import SearchMovie from './Modal/SearchModal';
import { renderResult, renderMovie } from './Views/MovieViews';
import { renderSearchResult } from './Views/SearchView';
import {
  clearUi,
  renderLoader,
  hideLoader,
  elements,
  getStoredData,
  getSearchValue,
} from './Views/base';
// import SearchModal from './Modal/SearchModal';
// import SearchModal from './Modal/SearchModal';

// ===== STATE OF THE APPLICATION =====
const state = {};

// ======== MOVIE CONTROLLER =========

const movieListController = async () => {
  state.movieList = new Movies();

  clearUi();
  renderLoader();
  try {
    await state.movieList.getMoviesList();
    hideLoader();
    renderResult(state.movieList);
  } catch (err) {
    console.log(err);
  }
};

// ======= SEARCH CONTROLLER =======

const searchController = async () => {
  state.search = new SearchMovie();

  const searchQuery = getSearchValue();
  if (/[a-zA-Z]/.test(searchQuery)) {
    clearUi();
    renderLoader();
    // window.scrollTo(0, 0);
    try {
      await state.search.searchMovie(searchQuery);
      hideLoader();
      renderSearchResult(state.search);
    } catch (err) {
      console.log(err);
    }
  }
};
// ====== PAGINATION CONTROLLER ======

const paginationController = async rest => {
  const { pageToken, pageNo } = rest;

  clearUi();
  renderLoader();
  window.scrollTo(0, 0);
  try {
    await state.movieList.getMoviesList(pageToken, pageNo);
    hideLoader();
    renderResult(state.movieList);
  } catch (err) {
    console.log(err);
  }
};

// ======== SELECTED MOVIE CONTROLLER =======
const movieController = async (movieId, pageNo) => {
  if (movieId) {
    state.movie = new Movies();

    clearUi();
    renderLoader();
    window.scrollTo(0, 0);

    try {
      await state.movie.getSelectedMovies(movieId, pageNo);
      hideLoader();
      renderMovie(state.movie);
    } catch (err) {
      console.log(err);
    }
  }
};

// Event Listner on window
window.addEventListener('load', () => {
  // Clear the previous page token

  if (localStorage.previousPage) {
    localStorage.removeItem('previousPage');
  }

  movieListController();

  // On submit the search movies
  elements.Form.addEventListener('submit', e => {
    e.preventDefault();
    searchController();
  });

  // ===== ALL EVENTLISTENER =====
  elements.mainContainer.addEventListener('click', e => {
    const page = document.querySelector('.number');
    const nextButton = e.target.closest('.next_page');
    const backButton = e.target.closest('.back_page');
    const selectedMovie = e.target.closest('.movie_card > span');
    const movieBackButton = e.target.closest('.back_button');

    // Click on next pagination button
    if (nextButton) {
      const nextPageToken = nextButton.dataset.pagetoken;
      const storedPrePage = getStoredData();
      let getindexOfAlreadyStoredPageToken;
      let pageNo = parseInt(page.dataset.currentpage, 10);

      if (pageNo) {
        pageNo += 1;
      }

      if (storedPrePage.length > 0) {
        getindexOfAlreadyStoredPageToken = storedPrePage.findIndex(
          item => item.pageNo === pageNo
        );
        if (getindexOfAlreadyStoredPageToken !== -1) {
          storedPrePage.splice(getindexOfAlreadySotredPageToken, 1);
        }
      }
      storedPrePage.push({
        pageNo,
        prevPageToken: nextPageToken,
      });
      // STORE INTO THE LOCALSTORAGE
      localStorage.previousPage = JSON.stringify(storedPrePage);

      // CALLIING THE PAGINATION CONTROLLER
      paginationController({ pageToken: nextPageToken, pageNo });
    }

    // Click on pagination back button
    if (backButton) {
      if (localStorage.previousPage) {
        const storedPreviousToken = JSON.parse(localStorage.previousPage);
        let currentPageNo = parseInt(page.dataset.currentpage, 10);
        if (currentPageNo) {
          currentPageNo -= 1;
        }
        if (currentPageNo >= 2) {
          let prevPageTokens;
          // if (currentPageNo !== 2) {
          storedPreviousToken.forEach((element, index) => {
            if (element.pageNo === currentPageNo) {
              prevPageTokens = element.prevPageToken;
              // storedPreviousToken.splice(index, 1);
            }
          });

          // Calling pagination controller
          paginationController({
            pageToken: prevPageTokens,
            pageNo: currentPageNo,
          });
        } else {
          window.location.reload();
        }
      }
    }

    // CLIck when select a movie
    if (selectedMovie) {
      const { id: movieId, pageno } = selectedMovie.dataset;

      movieController(movieId, +pageno);
    }
    // CLick when the click on movie back button
    if (movieBackButton) {
      const backButtonPageNo = movieBackButton.dataset.pageno;
      if (+backButtonPageNo > 1) {
        const getStoredPreviousPageToken = getStoredData();
        if (getStoredPreviousPageToken.length > 0) {
          const pageToken = getStoredPreviousPageToken.find(
            ({ pageNo, prevPageToken }) =>
              pageNo === +backButtonPageNo && prevPageToken
          );
          paginationController({
            pageToken: pageToken.prevPageToken,
            pageNo: +backButtonPageNo,
          });
        }
      } else {
        window.location.reload();
      }
    }
  });
});
