import { MOVIE_FILTERS } from "../utils/Filters";

export const SortBar = ({ onSort }) => {
  const onSortValueChange = (e) => {
    onSort(e.target.value);
  };

  const options = MOVIE_FILTERS.map((filter) => (
    <option key={filter.id} value={filter.value}>
      {filter.name}
    </option>
  ));

  return (
    <div className="d-flex justify-content-end">
      <div className="card p-2 shadow-lg">

        

        <select className="form-control" onChange={onSortValueChange}>
          <option key={0} value={null}>
            Select a sort
          </option>
          {options}
        </select>
      </div>
    </div>
  );
};
