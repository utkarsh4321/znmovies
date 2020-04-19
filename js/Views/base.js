// This file contains the all the basic elements of this website

export const elements = {
  mainContainer: document.querySelector('.main_container'),
  Form: document.querySelector('.search__form'),
  searchInput: document.querySelector('.search__textInput'),
  websiteWrapper: document.querySelector('.website__wrapper'),
};

export const renderLoader = () => {
  const markup = `

<div class="loader">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    
`;
  elements.mainContainer.insertAdjacentHTML('afterbegin', markup);
};

export const hideLoader = () => {
  // document.querySelector('.loader').innerHTML = '';
  elements.mainContainer.innerHTML = '';
};

export const clearUi = () => {
  elements.mainContainer.innerHTML = '';
};
// function for getting the stored prev page token
export function getStoredData() {
  const storePrePage = localStorage.previousPage;
  let sotredArray;
  if (storePrePage) {
    sotredArray = JSON.parse(storePrePage);
  } else {
    sotredArray = [];
  }

  return sotredArray;
}

// Error Message on any conflict
export const renderErrorMessage = errorMessage => {
  const markups = `

<div class="mx-auto movie__section">
    <h2 class="movie-title text-center my-4">
      opps ${errorMessage}
    </h2>
    <img src=${require('../../assets/undraw_warning_cyit.svg')} alt="movi" loading="lazy" />
</div>
`;
  elements.mainContainer.insertAdjacentHTML('afterbegin', markups);
};

// Render markup on search not found
export const renderOnSearchNotFound = serchQuery => {
  const markups = `

<div class="mx-auto movie__section">
    <h2 class="movie-title text-center my-4">
      Nothing present for  ${serchQuery}
    </h2>
    <img src=${require('../../assets/undraw_web_search_eetr.svg')} alt="movi" class="ml-5" loading="lazy"/>
</div>
`;
  elements.mainContainer.insertAdjacentHTML('afterbegin', markups);
};
// Search Input values

export const getSearchValue = () => elements.searchInput.value;
// export const clearSearchValue = () => (elements.searchInput.value = '');
