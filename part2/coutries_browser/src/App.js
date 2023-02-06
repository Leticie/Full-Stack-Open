import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [countriesList, setCountriesList] = useState([])
  const [searchedCountry, setSearchedCountry] = useState([])
  const [showFilter, setCountriesToShow] = useState(false)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountriesList(response.data)
      })
  }, [])


  const countriesToShow = showFilter
  ? countriesList.filter(country => country.name.common.toLowerCase().includes(searchedCountry.toLowerCase()))
  : countriesList

  const handleChangeFilter = (event) => {
    setSearchedCountry(event.target.value)
    setCountriesToShow(true)
  }

  const CountriesDisplay = () => {
    if (countriesToShow.length == 1) {
      return (
        <CountryInfo />
      )  
    }
    if (countriesToShow.length < 11) {
      return (
        <div>
          {countriesToShow.map(country => (
            <div key={country.name.common}>
              <p>{country.name.common}</p>
            </div>  
          ))}
        </div>
      )  
    } else {
      return (
        <div>
          <p>Too many matches, specify another filter</p>
        </div>
      )  
    }     
  }

  const CountryInfo = () => {
    const country = countriesToShow[0]
    console.log(country)
    return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <p>languages</p>
      <ul>
        {Object.keys(country.languages).map(key => 
          <li key={key}>{country.languages[key]}</li>
        )}
      </ul>
      <img src={country.flags.png} />
    </div>
  )}

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
