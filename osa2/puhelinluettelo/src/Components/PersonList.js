import { useState } from "react";

const PersonList = ({ list, filter }) => {
  return (
    <div>
      <ul>
        {list
          .filter((person) => person.name.includes(filter))
          .map((filterPerson, i) => (
            <li key={i}>
              {filterPerson.name} {filterPerson.number}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PersonList;
