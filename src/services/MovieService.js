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
