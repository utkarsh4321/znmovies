import { getMoviesInstance, getSelectedPostInstance } from '../Service';

export default class Movies {
  constructor() {
    this.result = [];
  }

  async getMoviesList(pageToken, pageNo) {
    let movieInstance;

    if (pageToken) {
      this.page = pageNo;
      movieInstance = await getMoviesInstance(pageToken);
    } else {
      movieInstance = await getMoviesInstance();
    }

    // const latestMovieInstance = await Instance(null, true);
    try {
      // const [firstApiRes, secondApiRes] = await Promise.all([
      //   movieInstance.get(),
      //   latestMovieInstance.get(),
      // ]);
      const {
        data: { nextPageToken, items },
        status,
      } = await movieInstance.get();

      //  = firstApiRes;
      // const {
      //   data: { items: latesItem },
      // } = secondApiRes;

      this.status = status;
      if (nextPageToken) {
        this.nextPage = nextPageToken;
        localStorage.nextPage = nextPageToken;
      } else {
        this.nextPage = '';
        localStorage.removeItem('nextPage');
      }
      // if (previousPageToken) {
      //   this.previousPage = previousPageToken;
      // }
      if (items) {
        this.result = items;
        // this.latestMovies = latesItem;
      }
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async getSelectedMovies(movieId, page) {
    const selectedMovieInstance = await getSelectedPostInstance(movieId);

    try {
      const {
        data: {
          id,
          title,
          content,
          images: [{ url }],
        },
        status,
      } = await selectedMovieInstance.get();
      this.status = status;
      this.pageNo = page;
      this.selectedMovie = { id, title, content, url };
    } catch (err) {
      this.errorMessage = err.message;
    }
  }
}
