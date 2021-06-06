import { useEffect, useState } from "react";
import { GetMovieGenres } from "../services/MovieService";

export const FilterMovies = ({ onFilter }) => {
  const [genres, setGenres] = useState([]);
  const [formValue, setFormValue] = useState({});

  useEffect(() => {
    GetMovieGenres().then((res) => setGenres(res.data.genres));
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    onFilter(formValue);
    setFormValue({})
  };

  const handleOnChange = (e) => {
    setFormValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="d-flex flex-column p-2 pb-5">
      <form onSubmit={onFormSubmit}>
        <div className="mb-3">
          <label htmlFor="genre">Select a Genre</label>
          <select
            id="genre"
            name="with_genres"
            className="form-control"
            onChange={handleOnChange}
          >
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

        <div className="mb-1">
          <label htmlFor="release_date.gte" className="form-label">
            Released from
          </label>
          <input
            onChange={handleOnChange}
            name="release_date.gte"
            type="date"
            className="form-control"
            id="release_date.gte"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="release_date.lte" className="form-label">
            Released to
          </label>
          <input
            onChange={handleOnChange}
            type="date"
            name="release_date.lte"
            className="form-control"
            id="release_date.lte"
          />
        </div>
        <button className="btn btn-outline-primary w-100 my-3" type="submit">
          Filter
        </button>
      </form>
    </div>
  );
};
