import "./App.css";

import { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [names, setNames] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
    countries.forEach((country) => {
      setNames((prev) => [...prev, country.name.common]);
    });
  }, []);
  console.log(names);
  const handleChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <div className="App">
      <form>
        <input type="text" handleChange={handleChange} name="search" />
      </form>
    </div>
  );
}
export default App;
