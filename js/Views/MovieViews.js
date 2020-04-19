import { elements, renderErrorMessage } from './base';
// import sliders from '../SlickSlider';

export const createPaginationContent = (value, next, prev) => ` ${
  value > 1
    ? `<button class="button back_page" type="button" data-pagetoken=${prev}>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="30" height="30"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g class="svg__fills"><path d="M40.02135,51.54401c-1.48951,0.04438 -2.90324,0.6669 -3.94167,1.73568l-28.16276,28.16276c-1.41918,1.08154 -2.25398,2.76211 -2.25837,4.54643c-0.00439,1.78431 0.82213,3.46898 2.23597,4.55748c0.01117,0.0075 0.02237,0.01497 0.03359,0.02239l28.15156,28.15156c1.43802,1.49776 3.57339,2.1011 5.58258,1.57732c2.00919,-0.52378 3.57824,-2.09283 4.10202,-4.10202c0.52378,-2.00919 -0.07955,-4.14456 -1.57731,-5.58258l-18.87969,-18.87969h135.22604c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843h-135.22604l18.87969,-18.87969c1.69569,-1.64828 2.20555,-4.16851 1.28389,-6.3463c-0.92166,-2.17779 -3.08576,-3.56638 -5.44951,-3.49667z"></path></g></g></svg>
     </button>`
    : `<button type="button" class="button back_page bg-secondary" disabled>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="30" height="30"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g class="svg__fills"><path d="M40.02135,51.54401c-1.48951,0.04438 -2.90324,0.6669 -3.94167,1.73568l-28.16276,28.16276c-1.41918,1.08154 -2.25398,2.76211 -2.25837,4.54643c-0.00439,1.78431 0.82213,3.46898 2.23597,4.55748c0.01117,0.0075 0.02237,0.01497 0.03359,0.02239l28.15156,28.15156c1.43802,1.49776 3.57339,2.1011 5.58258,1.57732c2.00919,-0.52378 3.57824,-2.09283 4.10202,-4.10202c0.52378,-2.00919 -0.07955,-4.14456 -1.57731,-5.58258l-18.87969,-18.87969h135.22604c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843h-135.22604l18.87969,-18.87969c1.69569,-1.64828 2.20555,-4.16851 1.28389,-6.3463c-0.92166,-2.17779 -3.08576,-3.56638 -5.44951,-3.49667z"></path></g></g></svg>
    
</button>`
}
     <span><h3 class="number" data-currentPage=${value}>${value}</h3></span>
     ${
       next
         ? `<button class="button next_page" type="button" data-pagetoken=${next}>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="30" height="30"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g class="svg__fills"><path d="M113.88281,49.88672l-7.55859,7.72656l23.01172,23.01172h-107.83594v10.75h107.83594l-23.01172,23.01172l7.55859,7.72656l36.11328,-36.11328z"></path></g></g></svg>
     </button>`
         : `<button type="button" class="button next_page bg-secondary" disabled>
         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="30" height="30"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g class="svg__fills"><path d="M113.88281,49.88672l-7.55859,7.72656l23.01172,23.01172h-107.83594v10.75h107.83594l-23.01172,23.01172l7.55859,7.72656l36.11328,-36.11328z"></path></g></g></svg>
         </button>`
     }
`;

export const renderMoviesCard = (result, page) => {
  const { id, title, images } = result;
  const moviesContainer = document.querySelector('.movies_rows');

  const markup = `
    <div class="movie_card col-md-3 col-sm-6 col-xs-6 col-lg-2 col-xl-2">
    <span data-id=${id} data-pageno=${page} style="cursor:pointer;">
    <div class="card">
      <div class="card-body">
        <img src=${images[0].url || images} alt="${id}" loading="lazy"  />
        <button class="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Capa_1"
            enable-background="new 0 0 494.942 494.942"
            height="18"
            viewBox="0 0 494.942 494.942"
            width="18"
          >
            <path d="m35.353 0 424.236 247.471-424.236 247.471z" />
          </svg>
        </button>
      </div>
    </div>
    <h4 class="movie-title text-center my-4">${title.split('|')[0].trim()}</h4>
    </span>
    </div>
    `;
  moviesContainer.insertAdjacentHTML('afterbegin', markup);
};

export const renderPagination = (page, prevPageToken, nextPageToken) => {
  const sliderContainer = document.querySelector('.pagination_container');
  let paginationButton;
  if (page === 1 && nextPageToken) {
    paginationButton = createPaginationContent(page, nextPageToken);
  }
  if (page > 1) {
    paginationButton = createPaginationContent(
      page,
      nextPageToken,
      prevPageToken
    );
  }
  sliderContainer.insertAdjacentHTML('afterbegin', paginationButton);
};

export const renderResult = rest => {
  const {
    status,
    result,
    latestMovies,
    page = 1,
    nextPage,
    previousPage,
    errorMessage,
  } = rest;

  if (status === 200) {
    const markup = `
    <section class="movie-grid mx-5 mb-3">
        <h3 class="mt-4 text-md-left text-center">
          Popular Movies, Web Series & Songs
        </h3>
        <div class="row mt-4 movies_rows">
        </div>
    </section>

    <div class="pagination_container"></div> `;
    // sliders();
    elements.mainContainer.insertAdjacentHTML('afterbegin', markup);
    result.forEach(movie => renderMoviesCard(movie, page));
    renderPagination(page, previousPage, nextPage);
    // latestMovies.forEach(movie => renderSliderMovieCard(movie));
  } else {
    renderErrorMessage(errorMessage);
  }
};

// Movie view for the individual movie

export const renderMovie = ({
  status,
  selectedMovie: { id, title, url, content },
  pageNo,
  errorMessage,
}) => {
  // console.log(content, pageNo, 'This is prev page');
  // const downlaodUrl = $(content)
  //   .children('.separator')
  //   .children('a[href*="https://www.indishare.org/"]')
  //   .attr('href');
  if (status >= 200 && status <= 204) {
    const markups = `

  <div class="container mt-5">
          <div class="container text-center back_button" data-pageno=${pageNo}>
          <div class="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="30" height="30"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g class="back__svg"><path d="M40.02135,51.54401c-1.48951,0.04438 -2.90324,0.6669 -3.94167,1.73568l-28.16276,28.16276c-1.41918,1.08154 -2.25398,2.76211 -2.25837,4.54643c-0.00439,1.78431 0.82213,3.46898 2.23597,4.55748c0.01117,0.0075 0.02237,0.01497 0.03359,0.02239l28.15156,28.15156c1.43802,1.49776 3.57339,2.1011 5.58258,1.57732c2.00919,-0.52378 3.57824,-2.09283 4.10202,-4.10202c0.52378,-2.00919 -0.07955,-4.14456 -1.57731,-5.58258l-18.87969,-18.87969h135.22604c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843h-135.22604l18.87969,-18.87969c1.69569,-1.64828 2.20555,-4.16851 1.28389,-6.3463c-0.92166,-2.17779 -3.08576,-3.56638 -5.44951,-3.49667z"></path></g></g></svg>
    </div>
          <h5 class="buttons">Back</h5>
        </div>
      
       ${content}
      
  </div>
  `;

    elements.mainContainer.insertAdjacentHTML('afterbegin', markups);
  } else {
    renderErrorMessage(errorMessage);
  }
};
