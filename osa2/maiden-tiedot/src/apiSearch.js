import { useEffect, useState } from "react";

import axios from "axios";

function ApiSearch() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${search}`)
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
      });
  }, [search]);
  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      Search for a country
      <form>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          name="search"
        />
      </form>
      {search.length === 0 && <p>Ei hakua!</p>}
      {countries.length > 10 && search.length > 0 && (
        <p>Liian monta tulosta!</p>
      )}
      {search.length > 0 &&
        countries.length < 10 &&
        countries.map((country, i) => {
          return <p key={i}>{country.name.common}</p>;
        })}
    </div>
  );
}
export default ApiSearch;
