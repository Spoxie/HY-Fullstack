const Filter = ({ filter, handle }) => {
  return (
    <div>
      <input onChange={handle} value={filter}></input>
    </div>
  );
};
export default Filter;
