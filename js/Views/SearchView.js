import { elements, renderOnSearchNotFound, renderErrorMessage } from './base';
import { renderMoviesCard } from './MovieViews';

// Render Search Result

export const renderSearchResult = rest => {
  const { status, SearchResult, searchQuery, errorMessage } = rest;

  if (status >= 200 && status <= 204) {
    if (SearchResult.length > 0) {
      const markup = `
      <section class="movie-grid mx-5 mb-3">
          <h3 class="mt-4 text-md-left text-center">
            Popular Movies, Web Series & Songs
          </h3>
          <div class="text-right">
            <a href="./moviesList.html">See more</a>
          </div>
          <div class="row mt-4 movies_rows">
          </div>
      </section>
  
      <div class="pagination_container"></div> `;
      // sliders();
      elements.mainContainer.insertAdjacentHTML('afterbegin', markup);
      SearchResult.forEach(({ id, title, content }) => {
        const images = $(content)
          .find('img:first')
          .attr('src');
        renderMoviesCard({ id, title, images }, 1);
      });
    } else {
      renderOnSearchNotFound(searchQuery);
    }
  } else {
    renderErrorMessage(errorMessage);
  }
};
