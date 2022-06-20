import { useState } from "react";

const Filter = (props) => {
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <div>
      <form>
        <div>
          filter: name:{" "}
          <input value={filter} onChange={handleChange} name="name" />
        </div>
      </form>
    </div>
  );
};

export default Filter;
