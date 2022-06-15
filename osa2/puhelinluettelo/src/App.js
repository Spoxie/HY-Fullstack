import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
    };
    console.log(nameObject.name);
    if (persons.some((person) => person.name === nameObject.name)) {
      alert(newName + " on jo listassa!");
      setNewName("");
    } else {
      setPersons(persons.concat(nameObject));
      setNewName("");
    }
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index} person={person}>
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
