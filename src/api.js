import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mzk1YzI1Y2U0ZDhkYjlhMmZiMDE2NWM0MDg5YmEyNiIsInN1YiI6IjY1ZDU5MDlmMGU0ZmM4MDE4Njg0YzAxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WXq97zzuxY9Rm4MzGWGblvpd907B0wVQqFxOMD2pgDw";

export const getTrendingMovies = async () => {
  const response = await axios.get("trending/movie/day");
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits`);
  return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/reviews`);
  return response.data.results;
};

export const getMovies = async (query) => {
  const response = await axios.get(`search/movie?query=${query}`);
  return response.data.results;
};

export const buildPicturePath = (pictureName) => {
  return `https://image.tmdb.org/t/p/w500/${pictureName}`;
};
