import { MovieCard } from "./Card";

export const MovieList = ({ movies }) => {


  const movieCards = movies.map((movie) => (
    <MovieCard key= {movie.id}
      className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
      movie={movie}
    />
  ));

  return (
    <div className="col-12 mt-5">
      <div className="row">{movieCards}</div>
    </div>
  );
};
