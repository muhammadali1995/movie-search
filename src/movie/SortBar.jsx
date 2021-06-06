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
      <select className="form-control w-25" onChange={onSortValueChange}>
        <option key={0} value={null}>
          Select a sort
        </option>
        {options}
      </select>
    </div>
  );
};
