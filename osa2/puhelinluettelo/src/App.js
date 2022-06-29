import { useEffect, useState } from "react";

import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import PersonList from "./Components/PersonList";
import axios from "axios";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [test, setTest] = useState([]); //ihmiset listataan tässä
  const [filter, setFilter] = useState("");

  console.log(test);
  useEffect(() => {
    personsService.getAll().then((initPersons) => {
      setTest(initPersons);
    });
  }, []);

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
      <PersonList list={test} filter={filter} />
    </div>
  );
};

export default App;
