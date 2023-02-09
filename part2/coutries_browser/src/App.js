import { useState } from "react";
import { CountriesDisplay } from "./components/CountriesDisplay";
import { Filter } from "./components/Filter";

function App() {
  const [searchedCountry, setSearchedCountry] = useState("");
  const [filter, setFilter] = useState(false);

  const handleChangeFilter = (event) => {
    setSearchedCountry(event.target.value);
    setFilter(true);
  };

  return (
    <>
      <Filter handleChangeFilter={handleChangeFilter}/>
      <CountriesDisplay
        searchedCountry={searchedCountry}
        filter={filter}
      />
    </>
  );
}

export default App;
