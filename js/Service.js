import Axios from 'axios';

// Function to getTheMovies
const blogId = process.env.BLOG_ID;
const apiKey = process.env.API_KEY;
export function getMoviesInstance(pageToken) {
  if (pageToken) {
    const pageTokenEndPoint = Axios.create({
      baseURL: `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&fetchImages=true&maxResults=12&pageToken=${pageToken}`,
    });

    return pageTokenEndPoint;
  }
  const moviesInstance = Axios.create({
    baseURL: `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&fetchImages=true&maxResults=12`,
  });
  return moviesInstance;
}
// To get the instance for the search
export function listSearchedMoviesInstance(searchedQuery) {
  return Axios.create({
    baseURL: `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/search?key=${apiKey}&maxResults=12&fetchImages=true&q=${searchedQuery}`,
  });
}

export function getSelectedPostInstance(postId) {
  const individualPostInstance = Axios.create({
    baseURL: `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${postId}?key=${apiKey}&fetchImages=true`,
  });
  return individualPostInstance;
}
