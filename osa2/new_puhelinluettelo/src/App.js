import { useEffect, useState } from "react";

import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";
import axios from "axios";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState({ name: "", number: "" });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personsService.getAll().then((initResponse) => {
      setPersons(initResponse);
    });
  }, []);

  const addPersons = (event) => {
    event.preventDefault();
    console.log(newName.id);
    const newNumber = newName.number;

    const nameObject = {
      name: newName.name,
      number: newName.number,
    };

    if (persons.some((person, i) => person.name === newName.name)) {
      const same = persons.find((obj) => obj.name === newName.name);
      window.confirm(
        "Nimi " + newName.name + " on jo listassa, korvataanko numero"
      )
        ? personsService.update(same.id, nameObject)
        : alert("ei korvata");
    } else {
      const nameObject = {
        name: newName.name,
        number: newName.number,
      };
      personsService.create(nameObject);
      setPersons(persons.concat(nameObject));
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setNewName({ ...newName, [event.target.name]: value });
  };
  const handleFilter = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };
  const removePerson = (obj) => {
    window.confirm(
      "Are you sure to delete " + obj.name + " with an id of " + obj.id
    )
      ? personsService.remove(obj).then((responsedata) => {
          setPersons(persons.splice(obj.id, persons.length));
        })
      : console.log("person not removed");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm handle={handleChange} add={addPersons} name={newName} />
      <Filter filter={filter} handle={handleFilter} />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} remove={removePerson} />
    </div>
  );
};
export default App;
