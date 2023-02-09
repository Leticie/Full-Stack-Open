import { useState } from "react";
import { CountriesDisplay } from "./components/CountriesDisplay";

function App() {
  const [searchedCountry, setSearchedCountry] = useState("");
  const [filter, setFilter] = useState(false);

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
        searchedCountry={searchedCountry}
        filter={filter}
      />
    </div>
  );
}

export default App;
