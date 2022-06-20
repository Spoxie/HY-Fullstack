import { useState } from "react";

const PersonForm = (props) => {
  const [persons, setPersons] = useState([]);
  const [FormValue, setFormValue] = useState();

  const add = (event) => {
    event.preventDefault();
    console.log(FormValue);
    props.onSubmit(FormValue);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form onSubmit={add}>
        <div>
          filter: name:{" "}
          <input value={persons.name} onChange={handleChange} name="name" />
          number:{" "}
          <input value={persons.number} onChange={handleChange} name="number" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
