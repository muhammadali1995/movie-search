export const MovieCard = ({ className, movie }) => {
  const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const addToFavorites = () => {};

  return (
    <div className={className}>
      <div className='card my-2'>
        <img
          src={posterPath}
          className="img-fluid card-image-top"
          alt="movie banner"
        />
        <div className="card-body">
          <div>
            <i className="bi bi-star-fill text-yellow"></i>{" "}
            <i>{movie.vote_average}</i>{" "}
          </div>
          <h6 className="card-title">{movie.original_title}</h6>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-heart"></i>
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};
