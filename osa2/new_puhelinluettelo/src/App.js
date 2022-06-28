import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "06012341234" },
  ]);
  const [newName, setNewName] = useState({ name: "", number: "" });
  const [filter, setFilter] = useState("");

  const addPersons = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName.name,
      number: newName.number,
    };

    if (persons.some((person) => person.name === nameObject.name)) {
      alert(`${newName.name} is already added to phonebook`);
      return;
    } else {
      setPersons(persons.concat(nameObject));
    }
    console.log(persons);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setNewName({ ...newName, [event.target.name]: value });
  };
  const handleFilter = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersons}>
        <div>
          Name
          <input value={newName.name} onChange={handleChange} name="name" />
          <br></br>
          Number
          <input value={newName.number} onChange={handleChange} name="number" />
          <br></br>
          Filter
          <input value={filter} onChange={handleFilter} name="filter"></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter((filterPerson) => filterPerson.name.includes(filter))
          .map((person, i) => (
            <li key={i}>
              {person.name} {person.number}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default App;
