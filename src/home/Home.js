import { Header } from "./Header";
import { SearchMovie } from "./../movie/Search";
import { SortBar } from "../movie/SortBar";
import { useEffect, useState } from "react";
import { DiscoverMovies, GetPopular, SearchMovies } from "../services/MovieService";
import { Error } from "../utils/Error";
import { MovieList } from "../movie/List";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const loadPopularMovies = async () => {
    try {
      const response = await GetPopular();
      setMovies(response.data.results);
    } catch (e) {
      setError(e.response.data.status_message);
    }
  };

  const onSearch = async (searchText) => {
    //if the input is empty then set movie list to popular movies otherwise search
    if (!searchText.trim()) {
      loadPopularMovies();
      return;
    }

    try {
      const response = await SearchMovies(searchText);
      setMovies(response.data.results);
    } catch (e) {
      setError(e.response.data.status_message);
    }
  };

  const onSort = async (value) => {
    try {
      const response = await DiscoverMovies(value);
      setMovies(response.data.results);
    } catch (e) {
      setError(e.response.data.status_message);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 offset-md-3 my-5">
            <SearchMovie onSearch={onSearch} />
          </div>

          <div className="col-12 sort-bar">
            <SortBar onSort={onSort} />
          </div>

          {error ? <Error message={error} /> : ""}
          <MovieList movies={movies} />
        </div>
      </div>
    </>
  );
};
