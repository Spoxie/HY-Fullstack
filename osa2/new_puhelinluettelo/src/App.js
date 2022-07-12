import "./App.css";

import { useEffect, useState } from "react";

import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState({ name: "", number: "", id: "" });
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    personsService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const addPersons = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName.name,
      number: newName.number,
    };

    if (persons.some((person) => person.name === newName.name)) {
      const same = persons.find((obj) => obj.name === newName.name);

      window.confirm(
        "Nimi " + newName.name + " on jo listassa, korvataanko numero"
      )
        ? personsService.update(same.id, nameObject).then(
            setPersons((current) =>
              current.map((obj) => {
                if (obj.id === same.id) {
                  setErrorMessage(`korjattu ${obj.name} numero`);
                  setTimeout(() => {
                    setErrorMessage(null);
                  }, 5000);
                  return {
                    ...obj,
                    name: newName.name,
                    number: newName.number,
                  };
                }
                return obj;
              })
            )
          )
        : //setPersons()
          setErrorMessage("Ei korjata");

      setTimeout(() => {
        setErrorMessage(null);
        setError(null);
      }, 5000);
    }
    if (!newName.name) {
      console.log("ei nimeä");
      return;
    } else {
      const nameObject = {
        name: newName.name,
        number: newName.number,
        id: newName.id,
      };

      personsService.create(nameObject);
      setPersons(persons.concat(nameObject));
      setErrorMessage("Henkilö lisätty");
      setError(false);

      setTimeout(() => {
        setErrorMessage(null);
        setError(null);
      }, 5000);
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
      "Haluatko poistaa henkilön " + obj.name + " jonka id on " + obj.id
    )
      ? personsService
          .remove(obj)
          .then((responsedata) => {
            setPersons(persons.filter((person) => person.id !== obj.id));
            setErrorMessage("henkilö poistettu");
            setError(false);
            setTimeout(() => {
              setErrorMessage(null);
              setErrorMessage(null);
            }, 5000);
          })
          .catch((error) => {
            setErrorMessage(`Henkilö on jo poistettu serveriltä`);
            setError(true);
            console.log(error);

            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          })
      : console.log("person not removed");
  };
  const Notification = ({ message, error }) => {
    const style = {
      color: "red",
      background: "lightgrey",
      fontSize: "20px",
      borderStyle: "solid",
      borderRadius: "5px",
      padding: "10px",
      marginBottom: "10px",
    };
    if (error === true) {
      style.color = "red";
    } else {
      style.color = "green";
    }

    if (message === null) {
      return null;
    }
    return (
      <div style={style} className="alerts">
        {message}
      </div>
    );
  };

  return (
    <div>
      <Notification message={errorMessage} error={error} />
      <h2>Phonebook</h2>
      <PersonForm handle={handleChange} add={addPersons} name={newName} />
      <Filter filter={filter} handle={handleFilter} />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} remove={removePerson} />
    </div>
  );
};
export default App;
