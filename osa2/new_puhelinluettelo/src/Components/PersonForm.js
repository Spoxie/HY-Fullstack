const PersonForm = ({ handle, add, name }) => {
  return (
    <form onSubmit={add}>
      <div>
        Name
        <input value={name.name} onChange={handle} name="name" />
        <br></br>
        Number
        <input value={name.number} onChange={handle} name="number" />
        <br></br>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default PersonForm;
