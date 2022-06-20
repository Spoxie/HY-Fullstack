import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import PersonList from "./Components/PersonList";
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [test, setTest] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [filter, setFilter] = useState();

  function handleChange(value) {
    setPersons(value);
  }
  function addName(newName) {
    if (newName === undefined) {
      alert("ei nimeä");
      return;
    } else {
      setTest((prev) => [...prev, newName]);
      console.log(test);
    }
  }

  function handleFilter(filters) {
    setFilter(filters);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilter} />
      <h2>Numbers</h2>
      <PersonForm list={test} onChange={handleChange} onSubmit={addName} />
      <PersonList list={test} filter={filter} />;
    </div>
  );
};

export default App;
