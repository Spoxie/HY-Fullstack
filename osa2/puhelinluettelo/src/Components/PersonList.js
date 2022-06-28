import axios from "axios";
import personsService from "../services/persons";
import { useState } from "react";

function PersonList(props) {
  const [list, setList] = useState(props.list);
  console.log(list);

  function remove(id, name) {
    window.confirm("Are you sure to delete " + name + " with an id of " + id)
      ? personsService.remove(id).then((response) => {
          console.log(response);
        })
      : console.log("nah");
  }
  return (
    <div>
      <ul>
        {props.list
          .filter((filterPerson) => filterPerson.name.includes(props.filter))
          .map((person, i) => (
            <li key={i}>
              {person.name} {person.number}
              <button onClick={() => remove(person.id, person.name)}>
                {" "}
                Delete number {person.id}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PersonList;
