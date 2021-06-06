import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const GetPopular = () => {
  return axios.get(`${apiUrl}/movie/popular`, {
    params: { language: "en-US" },
  });
};

export const SearchMovies = (searchText) => {
  return axios.get(`${apiUrl}/search/movie`, {
    params: { language: "en-US", query: searchText, adult: false },
  });
};

export const DiscoverMovies = (sortby = null, filterby = null) => {
  let queryParams = { adult: false };

  if (sortby) queryParams["sort_by"] = sortby;

  if (filterby && filterby["with_genres"])
    queryParams["with_genres"] = filterby["with_genres"];
  if (filterby && filterby["release_date.lte"])
    queryParams["release_date.lte"] = filterby["release_date.lte"];
  if (filterby && filterby["release_date.gte"])
    queryParams["release_date.gte"] = filterby["release_date.gte"];

  console.log(filterby);

  return axios.get(`${apiUrl}/discover/movie`, {
    params: queryParams,
  });
};

export const GetMovieGenres = () => {
  return axios.get(`${apiUrl}/genre/movie/list`);
};

export const AddToFavorites = (movie) => {
  const favMoviesJSON = localStorage.getItem("fav_movies");
  let movies = [];

  if (favMoviesJSON) {
    movies = JSON.parse(favMoviesJSON);

    const existingMovie = movies.find((m) => m.id === movie.id);
    if (existingMovie) {
      alert("You have already added to favorites");
      return;
    }
  }
  movies.push(movie);
  localStorage.setItem("fav_movies", JSON.stringify(movies));
};
