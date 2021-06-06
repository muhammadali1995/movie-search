export const SearchMovie = ({ onSearch }) => {
  const onInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <input className="form-control" placeholder="Search movies" onChange={onInputChange} />
    </>
  );
};
