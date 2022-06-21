import axios from "axios";

function PersonList(props) {
  return (
    <div>
      <ul>
        {props.list
          .filter((filterPerson) => filterPerson.name.includes(props.filter))
          .map((person, i) => (
            <li key={i}>
              {person.name} {person.number}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PersonList;
