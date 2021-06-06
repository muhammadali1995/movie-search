import { useEffect, useState } from "react";
import { FavoriteMovieCard } from "./Card";

export const FavoriteMovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let favMoviesJSON = localStorage.getItem("fav_movies");
    if (favMoviesJSON) {
      setMovies(JSON.parse(favMoviesJSON));
    }
  }, []);

  const movieCards = movies.map((movie) => (
    <FavoriteMovieCard
      key={movie.id}
      className="col-12 col-sm-6 col-md-4 col-lg-3"
      movie={movie}
    />
  ));

  return (
    <div className="container">
      <div className="row my-5 py-5">{movieCards}</div>
    </div>
  );
};
