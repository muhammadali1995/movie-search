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
  
  if (filterby) queryParams["with_genres"] = filterby;

  return axios.get(`${apiUrl}/discover/movie`, {
    params: queryParams,
  });
};

export const GetMovieGenres = () => {
  return axios.get(`${apiUrl}/genre/movie/list`);
};
