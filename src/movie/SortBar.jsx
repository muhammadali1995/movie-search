export const SortBar = ({ onSort }) => {
  const onSortValueChange = (e) => {};
  return (
    <div className="d-flex justify-content-end">
      <select
        className="form-control w-25"
        onChange={onSortValueChange}
      ></select>
    </div>
  );
};
