import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [countriesList, setCountriesList] = useState([])
  const [searchedCountry, setSearchedCountry] = useState([])
  const [showedCountries, setCountriesToShow] = useState(true)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountriesList(response.data)
      })
  }, [])


  const countriesToShow = showedCountries.length
  ? countriesList
  : countriesList.filter(country => country.name.common.toLowerCase().includes(searchedCountry.toLowerCase()));  

  const handleChangeFilter = (event) => {
    setSearchedCountry(event.target.value)
    setCountriesToShow(false)
  }

  const CountriesDisplay = () => (
    <div>
      {countriesToShow.map(country => (
        <div key={country.name.common}>
          <p>{country.name.common}</p>
        </div>  
      ))}
    </div>   
  )

  return (
    <div>
      <form>
        find countries <input onChange={handleChangeFilter}/>
      </form>
      <CountriesDisplay />
    </div>
  );
}

export default App;
