import { useEffect, useState } from "react";
import axios from "axios";
import { CountriesDisplay } from "./components/CountriesDisplay";

function App() {
  const [countriesList, setCountriesList] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState("");
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountriesList(response.data);
    });
  }, []);

  const countriesToShow = filter
    ? countriesList.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(searchedCountry.toLowerCase())
      )
    : countriesList;

  const handleChangeFilter = (event) => {
    setSearchedCountry(event.target.value);
    setFilter(true);
  };


  return (
    <div>
      <form>
        find countries <input onChange={handleChangeFilter} />
      </form>
      <CountriesDisplay
        countriesToShow={countriesToShow} searchedCountry={searchedCountry}
      />
    </div>
  );
}

export default App;
