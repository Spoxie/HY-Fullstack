const Persons = ({ filter, persons, remove }) => {
  return (
    <div>
      {persons
        .filter((filterPerson) => filterPerson.name.includes(filter))
        .map((person, i) => (
          <li key={i}>
            {person.name} {person.number}
            <button key={i} onClick={() => remove(person)}>
              Delete number
            </button>
          </li>
        ))}
    </div>
  );
};
export default Persons;
//huom jatkoa varten; tuo button on "funktio", jonka avulla voi laittaa kokonaisen objektin toiseen komponenttiin
