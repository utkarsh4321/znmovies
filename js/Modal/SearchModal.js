import { listSearchedMoviesInstance } from '../Service';

export default class SearchModal {
  constructor() {
    this.SearchResult = [];
  }

  async searchMovie(searchQuery) {
    const movieInstance = await listSearchedMoviesInstance(searchQuery);

    try {
      const {
        status,
        data: { items },
      } = await movieInstance.get();
      if (searchQuery) {
        this.searchQuery = searchQuery;
      }
      if (status) {
        this.status = status;
      }
      if (items) {
        this.SearchResult = items;
      }
    } catch (err) {
      this.errorMessage = err.message;
    }
  }
}
