import { useEffect, useState } from "react";
import { GetMovieGenres } from "../services/MovieService";

export const FilterMovies = ({ onFilter }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    GetMovieGenres().then((res) => setGenres(res.data.genres));
  }, []);

  const onGenreSelected = (e) => {
    if (!e.target.value) return;
    onFilter(e.target.value);
  };

  return (
    <div className="card shadow-lg w-50 p-2 mx-3">
      <select className="form-control" onChange={onGenreSelected}>
        <option key={0} value={null}>
          Select a genre
        </option>
        {genres?.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};
