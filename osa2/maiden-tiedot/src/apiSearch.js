import { useEffect, useState } from "react";

import axios from "axios";

function ApiSearch() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [font, setFont] = useState(true);
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
  function setCountry(event) {
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
        countries.length > 1 &&
        countries.map((country, i) => {
          return (
            <p key={i}>
              {country.name.common}
              <button value={country.name.common} onClick={setCountry}>
                Set this country only
              </button>
            </p>
          );
        })}
      {countries.length === 1 &&
        countries.map((country, i) => {
          return (
            <div>
              <h1 key={i}>{country.name.common}</h1> <br />
              <p>{country.capital}</p>
              <p>area {country.area}</p> <br />
              <p> languages</p>
              <ul>
                {Object.values(country.languages).map((language, i) => (
                  <li key={i}>{language}</li>
                ))}
              </ul>
              <img src={country.flags.png} alt="flag" />
            </div>
          );
        })}
    </div>
  );
}
export default ApiSearch;
